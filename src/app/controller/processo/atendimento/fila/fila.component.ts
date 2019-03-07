import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';

import { ConfirmService } from './../../../../util/confirm/confirm.service';
import { GenericListComponent } from './../../../../generic/generic-list-component';
import { Modal } from './../../../../generic/modal';

import { Atendimento } from './../../../../model/atendimento.model';
import { Localizacao } from './../../../../model/localizacao.model';
import { AtendimentoFilter } from './../../../../filter/atendimento.filter';
import { LocalizacaoFilter } from './../../../../filter/localizacao.filter';
import { AtendimentoService } from './../../../../service/atendimento.service';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {

  private util: FilaUtil;
  private timeout: Subscription;
  private modalLocalizacao: Modal;
  private atendimento: Atendimento;
  private atendimentos: Array<Atendimento>;
  private filas: Array<Atendimento>;
  private beep: any;

  constructor(private servico: AtendimentoService, private router: Router) {
    this.util = new FilaUtil(servico);
    this.atendimento = servico.initializeObject();
    this.atendimento.$fila = servico.getFilaAtendimentoService().initializeObject();
    this.modalLocalizacao = new Modal(this, 'refreshAtendimentos');
    this.router.routerState.snapshot.url = 'Fila de Atendimento';
    this.beep = new Audio();
    this.beep.src = './../../../../../assets/audio/beep.mp3';
  }

  ngOnInit() {
    this.modalLocalizacao.open();
    this.util.onInit();
  }

  refreshAtendimentos() {
    if (!this.atendimento.$fila.$localizacao) {
      this.servico.showMessage('É necessário informar a Localização.');
      return false;
    }

    this.servico.getListAtendimentosAguardandoEmpregadoByLocalizacao(this.atendimento, (res) => {
      const list = res.json();
      if (list && list.length > 0) {
        this.atendimentos = this.servico.toList(list);
        this.beep.load();
        this.beep.play();
      } else {
        this.atendimentos = undefined;
      }
      this.timeout = Observable.timer(10000).subscribe(() => {
        this.refreshAtendimentos();
      });

    }, undefined);

    this.servico.getListFilasAtendimentoByLocalizacao(this.atendimento, (res) => {
      const list = res.json();
      if (list && list.length > 0) {
        this.filas = this.servico.toList(list);
      } else {
        this.filas = undefined;
      }
    }, undefined);
    return true;
  }

  ngOnDestroy() {
    if (this.timeout) {
      this.timeout.unsubscribe();
    }
  }
}

export class FilaUtil {
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
}
