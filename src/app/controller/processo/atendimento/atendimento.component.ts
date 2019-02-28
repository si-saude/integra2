import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Modal } from './../../../generic/modal';
import { GenericWizardComponent } from './../../../generic/generic-wizard-component';
import { WizardService } from './../../../util/wizard-service/wizard-service.service';

import { Atendimento } from './../../../model/atendimento.model';
import { AtendimentoFilter } from './../../../filter/atendimento.filter';
import { AtendimentoService } from './../../../service/atendimento.service';
import { FilaAtendimento } from './../../../model/fila-atendimento.model';
import { FilaAtendimentoFilter } from './../../../filter/fila-atendimento.filter';
import { Localizacao } from './../../../model/localizacao.model';
import { LocalizacaoFilter } from './../../../filter/localizacao.filter';
import { Profissional } from './../../../model/profissional.model';
import { ProfissionalFilter } from './../../../filter/profissional.filter';
import { Usuario } from './../../../model/usuario.model';
import { UsuarioService } from './../../../service/usuario.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent extends GenericWizardComponent<Atendimento> implements OnInit {

  private util: AtendimentoUtil;
  private fila: FilaAtendimento;
  private profissional: Profissional;
  private timeout: Subscription;
  private modalEntrar: Modal;

  constructor(private servico: AtendimentoService, router: Router, route: ActivatedRoute,
      wizardService: WizardService<Atendimento>, private usuarioService: UsuarioService) {
    super(servico, router, route, 'Atendimento', wizardService, undefined, '', '');
    this.first = 'atendimento';
    this.util = new AtendimentoUtil(servico);
    this.fila = this.servico.getFilaAtendimentoService().initializeObject();
    this.modalEntrar = new Modal(this, 'entrar');
  }

  ngOnInit() {
    this.util.onInit();
    this.getProfissional();
  }

  entrarOuVoltar() {
    if (this.util.isNullFila(this.fila)) {
      this.modalEntrar.open();
    } else if (this.fila.$status === 'INDISPONÍVEL') {
      this.callEntrarOuVoltar('Você voltou para a fila de atendimento.');
    } else if (this.fila.$status === 'DISPONÍVEL') {
      this.servico.showMessage('Você já está na fila de atendimento.');
    } else {
      this.servico.showMessage('Operação desconhecida. Entre em contato com o administrador do sistema.');
    }
  }

  entrar() {
    if (this.helper.isNull(this.fila) || this.helper.isNull(this.fila.$localizacao)) {
      this.servico.showMessage('Informe a Localização para entrar na fila de atendimento.');
      return false;
    }
    this.callEntrarOuVoltar('Você entrou na fila de atendimento.');
    return true;
  }

  pausar() {
    if (this.util.isNullFila(this.fila)) {
      this.servico.showMessage('Você não entrou na fila de atendimento.');
    } else if (this.fila.$status === 'INDISPONÍVEL') {
      this.servico.showMessage('A fila de atendimento já está pausada.');
    } else {
      this.callPausar('Você pausou a fila de atendimento.');
    }
  }

  encerrar() {
    if (this.util.isNullFila(this.fila)) {
      this.servico.showMessage('Você não entrou na fila de atendimento.');
    } else {
      this.callEncerrar('Você encerrou a fila de atendimento.');
    }
  }

  callEntrarOuVoltar(message: string) {
    this.setProfissionalNaFila();
    this.servico.getFilaAtendimentoService().entrarOuVoltar(this.fila, (res) => {
      this.fila = this.util.getReturnFila(res, message);
    }, undefined);
  }

  callPausar(message: string) {
    this.setProfissionalNaFila();
    this.servico.getFilaAtendimentoService().pausar(this.fila, (res) => {
      this.fila = this.util.getReturnFila(res, message);
    }, undefined);
  }

  callEncerrar(message: string) {
    this.setProfissionalNaFila();
    this.servico.getFilaAtendimentoService().encerrar(this.fila, (res) => {
      this.fila = this.servico.getFilaAtendimentoService().initializeObject();
      this.servico.showMessage(message);
    }, undefined);
  }

  getProfissional() {
    const usuario: Usuario = this.usuarioService.toObject(JSON.parse(localStorage.getItem('user')));
    const filter: ProfissionalFilter = this.servico.getFilaAtendimentoService()
                                          .getProfissionalService().initializeFilter();
    filter.$pageSize = 1;
    filter.$empregado.$chave = usuario.$chave;
    this.servico.getFilaAtendimentoService().getProfissionalService().list(
      filter, (res) => {
        const list = res.json().list;
        if (list && list[0]) {
          this.profissional = this.servico.getFilaAtendimentoService().getProfissionalService()
                                  .toObject(list[0]);
          this.getFila();
        } else {
          this.servico.showMessage('O usuário logado não é um profissional de saúde.');
          this.navigate('home');
        }
      }, undefined);
  }

  getFila() {
    let filter: FilaAtendimentoFilter = this.servico.getFilaAtendimentoService().initializeFilter();
    filter.$profissional.$id = this.profissional.$id;
    filter.$data.$inicioFront = this.helper.getToday();
    filter.$data.$typeFilter = 'IGUAL';
    filter = this.servico.getFilaAtendimentoService().transformFilter(filter);
    this.servico.getFilaAtendimentoService().getListNaoEncerrado(filter, (res) => {
      const list = res.json();
      if (list && list[0] && list[0]) {
        this.fila = this.servico.getFilaAtendimentoService().toObject(list[0]);
        if (!this.fila.$status.includes('DISPONÍVEL')) {
          this.getAtendimento();
        }
      }
    }, undefined);
  }

  getAtendimento() {
    const filter: AtendimentoFilter = this.servico.initializeFilter();
    filter.$pageSize = 1;
    filter.$fila.$id = this.fila.$id;
    filter.$tarefa.$responsavel.$id = this.profissional.$id;
    filter.$tarefa.$status = 'EXECUÇÃO';
    this.servico.list(filter, (res) => {
      const list = res.json().list;
      if (list && list[0]) {
        this.t = this.servico.toObject(list[0]);
      }
    }, undefined);
  }

  setProfissionalNaFila() {
    this.fila.$profissional = this.profissional;
  }

  refresh() {
    this.timeout = Observable.timer(17500).subscribe(() => this.refresh());
  }

  ngOnDestroy() {
    if (this.timeout) {
      this.timeout.unsubscribe();
    }
  }
}

export class AtendimentoUtil {
  localizacoes: Array<Localizacao>;
  localizacaoFilter: LocalizacaoFilter;

  constructor(private servico: AtendimentoService) {
    this.localizacaoFilter = servico.getFilaAtendimentoService().getLocalizacaoService()
                                    .initializeFilter();
    this.localizacaoFilter.$pageSize = 100000;
  }

  onInit() {
    this.servico.getFilaAtendimentoService().getLocalizacaoService()
        .list(this.localizacaoFilter, (res) => {
          this.localizacoes = this.servico.getFilaAtendimentoService()
              .getLocalizacaoService().toList(res.json().list);
    }, undefined);
  }

  isNullFila(fila: FilaAtendimento) {
    return this.servico.helper.isNull(fila) || !(fila.$id > 0)
  }

  getReturnFila(res, message: string) {
    if (message) {
      this.servico.showMessage(message);
    }
    return this.servico.getFilaAtendimentoService().toObject(res.json());
  }
}
