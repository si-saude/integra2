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
import { RespostaFichaColeta } from 'app/model/resposta-ficha-coleta.model';
import { ItemRespostaFichaColeta } from 'app/model/item-resposta-ficha-coleta.model';
import { DetalheRespostaFichaColeta } from 'app/model/detalhe-resposta-ficha-coleta.model';

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
  private beep: any;

  constructor(private servico: AtendimentoService, router: Router, route: ActivatedRoute,
    wizardService: WizardService<Atendimento>, private usuarioService: UsuarioService) {
    super(servico, router, route, 'Atendimento', wizardService, undefined, '', '');
    this.first = 'atendimento';
    this.util = new AtendimentoUtil(servico);
    this.fila = this.servico.getFilaAtendimentoService().initializeObject();
    this.modalEntrar = new Modal(this, 'entrar');
    this.beep = new Audio();
    this.beep.src = './../../../../assets/audio/beep.mp3';
  }

  ngOnInit() {
    this.util.onInit();
    this.getProfissional();
    this.refresh();
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

  iniciar() {
    if (!this.util.isNullFila(this.fila) && this.fila.$status === 'AGUARDANDO EMPREGADO') {
      this.callIniciar();
    } else {
      this.servico.showMessage('Operação desconhecida. Entre em contato com o administrador do sistema.');
    }
  }

  liberar() {
    if (!this.util.isNullFila(this.fila) && this.fila.$status === 'EM ATENDIMENTO') {
      if (this.validarFichaColeta()) {
        this.callLiberar();
      }
    } else {
      this.servico.showMessage('Operação desconhecida. Entre em contato com o administrador do sistema.');
    }
  }

  finalizar(status) {
    if (!this.util.isNullFila(this.fila) &&
      (this.fila.$status === 'EM ATENDIMENTO' || this.fila.$status === 'LANÇAMENTO DE INFORMAÇÕES')) {
      if (this.validarTriagens()) {
        this.callFinalizar(status);
      }
    } else {
      this.servico.showMessage('Operação desconhecida. Entre em contato com o administrador do sistema.');
    }
  }

  devolver() {
    if (this.t.$id > 0) {
      this.callDevolver();
    } else {
      this.servico.showMessage('Operação desconhecida. Entre em contato com o administrador do sistema.');
    }
  }

  registrarAusencia() {
    if (this.t.$id > 0) {
      this.callRegistrarAusencia();
    } else {
      this.servico.showMessage('Operação desconhecida. Entre em contato com o administrador do sistema.');
    }
  }

  validarFichaColeta() {
    for (let resposta of this.t.$checkin.$respostas) {
      const check: boolean = this.util.checkEquipe(resposta, this.profissional);
      if (check === true && resposta.$pergunta.$obrigatorio === true &&
        (resposta.$conteudo === undefined || resposta.$conteudo.trim() === '')) {
        this.servico.showMessage('Não é possível prosseguir pois há itens obrigatórios não preenchidos na ficha de coleta: ' +
          resposta.$pergunta.$descricao);
        return false;
      }
    }
    return true;
  }

  validarTriagens() {
    if (this.t.$triagens.filter(t => t.$indicador.$obrigatorio && t.$indice === -1).length > 0) {
      this.servico.showMessage('Não é possível prosseguir pois há indicadores obrigatórios não preenchidos na ficha de triagem.');
      return false;
    }
    return true;
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

  callIniciar() {
    this.servico.iniciar(this.t, (res) => {
      this.getFila();
    }, undefined);
  }

  callLiberar() {
    this.servico.liberar(this.t, (res) => {
      this.getFila();
      this.detailMode();
    }, undefined);
  }

  callFinalizar(status: string) {
    const atendimento: Atendimento = this.servico.toObject(this.t);
    atendimento.$fila.$status = status;
    this.servico.finalizar(atendimento, (res) => {
      this.getFila();
    }, undefined);
  }

  callDevolver() {
    this.servico.devolver(this.t, (res) => {
      this.getFila();
    }, undefined);
  }

  callRegistrarAusencia() {
    this.servico.registrarAusencia(this.t, (res) => {
      this.getFila();
    }, undefined);
  }

  getProfissional() {
    const usuario: Usuario = this.usuarioService.toObject(JSON.parse(localStorage.getItem('user')));
    const filter: ProfissionalFilter = this.servico.getFilaAtendimentoService()
      .getProfissionalService().initializeFilter();
    filter.$pageSize = 1;
    filter.$empregado.$chave = usuario.$chave;
    this.servico.getFilaAtendimentoService().getProfissionalService().listEquipes(
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
        this.getAtendimento();
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
        this.fila = this.t.$fila;
        this.util.grupos = this.helper.distinct(this.t.$checkin.$respostas.map(r => r.$pergunta.$grupo.$nome));
        this.playBeep();
        this._detailMode = (this.fila.$status === 'LANÇAMENTO DE INFORMAÇÕES');
      } else {
        this.t = this.servico.initializeObject();
        this.util.grupos = undefined;
      }
    }, undefined);
  }

  setProfissionalNaFila() {
    this.fila.$profissional = this.profissional;
  }

  refresh() {
    if (this.fila) {
      if (this.fila.$status === 'DISPONÍVEL') {
        this.getAtendimento();
      } else if (this.fila.$status === 'AGUARDANDO EMPREGADO') {
        this.playBeep();
      }
    }
    this.timeout = Observable.timer(10000).subscribe(() => this.refresh());
  }

  playBeep() {
    this.beep.load();
    this.beep.play();
  }

  ngOnDestroy() {
    if (this.timeout) {
      this.timeout.unsubscribe();
    }
  }
}

export class AtendimentoUtil {

  abrangencia: Array<string>;
  aptidaoCardiorrespiratoria: Array<string>;
  aptidaoFisicaBrigadista: Array<string>;
  autoavaliacaoHabitosAlimentares: Array<string>;
  direitoEsquerdo: Array<string>;
  doresCorporais: Array<string>;
  exposicaoRiscosAmbientais: Array<string>;
  flexibilidade: Array<string>;
  forcaAbdominal: Array<string>;
  forcaPreensaoManual: Array<string>;
  fuma: Array<string>;
  fumaClassificacao: Array<string>;
  grupos: Array<string>;
  intensidade: Array<string>;
  localizacoes: Array<Localizacao>;
  localizacaoFilter: LocalizacaoFilter;
  nivelAtividadeFisica: Array<string>;
  partesCorpo: Array<string>;
  refereQualidadeAgua: Array<string>;
  simNao: Array<string>;
  tempoAnos: Array<string>;
  tempoMeses: Array<string>;

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

    this.servico.getUtilService().getAbrangencia('', (list) => {
      this.abrangencia = list;
    }, undefined);

    this.servico.getUtilService().getAptidaoCardiorrespiratoria('', (list) => {
      this.aptidaoCardiorrespiratoria = list;
    }, undefined);

    this.servico.getUtilService().getAptidaoFisicaBrigadista('', (list) => {
      this.aptidaoFisicaBrigadista = list;
    }, undefined);

    this.servico.getUtilService().getAutoavaliacaoHabitosAlimentares('', (list) => {
      this.autoavaliacaoHabitosAlimentares = list;
    }, undefined);

    this.servico.getUtilService().getDireitoEsquerdo('', (list) => {
      this.direitoEsquerdo = list;
    }, undefined);

    this.servico.getUtilService().getDoresCorporais('', (list) => {
      this.doresCorporais = list;
    }, undefined);

    this.servico.getUtilService().getExposicaoRiscosAmbientais('', (list) => {
      this.exposicaoRiscosAmbientais = list;
    }, undefined);

    this.servico.getUtilService().getFlexibilidade('', (list) => {
      this.flexibilidade = list;
    }, undefined);

    this.servico.getUtilService().getForcaAbdominal('', (list) => {
      this.forcaAbdominal = list;
    }, undefined);

    this.servico.getUtilService().getForcaPreensaoManual('', (list) => {
      this.forcaPreensaoManual = list;
    }, undefined);

    this.servico.getUtilService().getFuma('', (list) => {
      this.fuma = list;
    }, undefined);

    this.servico.getUtilService().getFumaClassificacao('', (list) => {
      this.fumaClassificacao = list;
    }, undefined);

    this.servico.getUtilService().getIntensidade('', (list) => {
      this.intensidade = list;
    }, undefined);

    this.servico.getUtilService().getNivelAtividadeFisica('', (list) => {
      this.nivelAtividadeFisica = list;
    }, undefined);

    this.servico.getUtilService().getPartesCorpo('', (list) => {
      this.partesCorpo = list;
    }, undefined);

    this.servico.getUtilService().getRefereQualidadeAgua('', (list) => {
      this.refereQualidadeAgua = list;
    }, undefined);

    this.servico.getUtilService().getSimNao('', (list) => {
      this.simNao = list;
    }, undefined);

    this.servico.getUtilService().getTempoAnos('', (list) => {
      this.tempoAnos = list;
    }, undefined);

    this.servico.getUtilService().getTempoMeses('', (list) => {
      this.tempoMeses = list;
    }, undefined);
  }

  getEnumArray(path: string) {

    switch (path) {
      case 'abrangencia':
        return this.abrangencia;

      case 'aptidao-cardiorrespiratoria':
        return this.aptidaoCardiorrespiratoria;

      case 'aptidao-fisica-brigadista':
        return this.aptidaoFisicaBrigadista;

      case 'autoavaliacao-habitos-alimentares':
        return this.autoavaliacaoHabitosAlimentares;

      case 'direito-esquerdo':
        return this.direitoEsquerdo;

      case 'dores-corporais':
        return this.doresCorporais;

      case 'exposicao-riscos-ambientais':
        return this.exposicaoRiscosAmbientais;

      case 'flexibilidade':
        return this.flexibilidade;

      case 'forca-abdominal':
        return this.forcaAbdominal;

      case 'forca-prenssao-manual':
        return this.forcaPreensaoManual;

      case 'fuma':
        return this.fuma;

      case 'fuma-classificacao':
        return this.fumaClassificacao;

      case 'intensidade':
        return this.intensidade;

      case 'nivel-atividade-fisica':
        return this.nivelAtividadeFisica;

      case 'partes-corpo':
        return this.partesCorpo;

      case 'refere-qualidade-agua':
        return this.refereQualidadeAgua;

      case 'sim-nao':
        return this.simNao;

      case 'tempo-anos':
        return this.tempoAnos;

      case 'tempo-meses':
        return this.tempoMeses;
    }

    return undefined;
  }

  isNullFila(fila: FilaAtendimento) {
    return this.servico.helper.isNull(fila) || !(fila.$id > 0);
  }

  getReturnFila(res, message: string) {
    if (message) {
      this.servico.showMessage(message);
    }
    return this.servico.getFilaAtendimentoService().toObject(res.json());
  }

  checkItemRespostaFichaColeta(resposta: RespostaFichaColeta) {
    if (resposta.$pergunta.$path === 'sim-nao') {
      if (resposta.$conteudo === 'SIM') {
        if (!resposta.$itens) {
          resposta.$itens = new Array<ItemRespostaFichaColeta>();
        }
        if (resposta.$itens.length === 0) {
          resposta.$itens.push(this.newItemRespostaFichaColeta(resposta));
        }
      } else {
        resposta.$itens = new Array<ItemRespostaFichaColeta>();
      }
    }
  }

  addItemRespostaFichaColeta(resposta: RespostaFichaColeta) {
    resposta.$itens.push(this.newItemRespostaFichaColeta(resposta));
  }

  newItemRespostaFichaColeta(resposta: RespostaFichaColeta) {
    const item: ItemRespostaFichaColeta = this.servico.getCheckinService().toItem(new ItemRespostaFichaColeta());
    let x = 1;
    for (let i of resposta.$pergunta.$itens) {
      const detalhe: DetalheRespostaFichaColeta = this.servico.getCheckinService().toDetalhe(new DetalheRespostaFichaColeta());
      detalhe.$ordem = x;
      detalhe.$item = item;
      item.$detalhes.push(detalhe);
      x++;
    }
    return item;
  }

  checkEquipe(resposta: RespostaFichaColeta, profissional: Profissional) {
    return resposta.$pergunta.$equipes.find(e => profissional.$equipes.find(ee => ee.$id === e.$id) !== undefined) !== undefined;
  }

  detalheTemPath(resposta: RespostaFichaColeta, detalhe: DetalheRespostaFichaColeta) {
    return resposta.$pergunta.$itens.find(i => i.$path && i.$path.trim() !== '' && i.$ordem === detalhe.$ordem);
  }
}
