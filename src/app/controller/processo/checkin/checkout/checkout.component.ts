import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfirmService } from './../../../../util/confirm/confirm.service';
import { GenericListComponent } from './../../../../generic/generic-list-component';

import { Checkin } from './../../../../model/checkin.model';
import { CheckinFilter } from './../../../../filter/checkin.filter';
import { CheckinService } from './../../../../service/checkin.service';
import { FichaColetaValidator } from './../../../../controller/processo/atendimento/ficha-coleta.validator';
import { Helper } from 'app/generic/helper';
import { RespostaFichaColeta } from 'app/model/resposta-ficha-coleta.model';
import { Profissional } from 'app/model/profissional.model';
import { ItemRespostaFichaColeta } from 'app/model/item-resposta-ficha-coleta.model';
import { DetalheRespostaFichaColeta } from 'app/model/detalhe-resposta-ficha-coleta.model';
import { Atendimento } from 'app/model/atendimento.model';
import { AtendimentoService } from 'app/service/atendimento.service';
import { AtendimentoFilter } from 'app/filter/atendimento.filter';
import { Usuario } from 'app/model/usuario.model';
import { UsuarioService } from 'app/service/usuario.service';
import { FilaAtendimento } from 'app/model/fila-atendimento.model';
import { CriarAtendimentoValidator } from './criar-atendimento.validator';
import { GenericFilter } from 'app/generic/generic-filter';
import { Equipe } from 'app/model/equipe.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends GenericListComponent<Checkin, CheckinFilter> implements OnInit {

  private util: CheckoutUtil;
  private checkin: Checkin;
  private atendimento: Atendimento;
  private filas: Array<FilaAtendimento>;
  private atendimentos: Array<Atendimento>;

  private printFichaColeta = false;
  private acolhimento = false;

  @ViewChild( 'modalFichaColeta' ) modalFichaColeta;
  @ViewChild( 'modalFichaTriagem' ) modalFichaTriagem;
  @ViewChild( 'modalCriarAtendimento' ) modalCriarAtendimento;

  constructor(private servico: CheckinService, private atendimentoService: AtendimentoService, private router: Router, 
    private confirmService: ConfirmService, private fichaColetaValidator: FichaColetaValidator,
    private usuarioService: UsuarioService, private criarAtendimentoValidator: CriarAtendimentoValidator) {
    super(servico, router, 'Check-out',
      [
        ['Empregado', 'empregado.pessoa.nome'], ['Localização', 'localizacao.nome'],
        ['Chegada', 'chegadaFront'], ['Status', 'status']
      ]);
  }

  ngOnInit() {
    this.util = new CheckoutUtil(this.servico);
    this.util.onInit();
    const hoje = this.servico.helper.getToday();
    const amanha = this.servico.helper.createDateFromString(hoje, false);
    amanha.setDate(amanha.getDate() + 1);
    this.filter.$chegada.$inicioFront = hoje;
    this.filter.$chegada.$fimFront = this.servico.helper.dateToString(amanha);
    this.filter.$chegada.$typeFilter = 'ENTRE';
    this.page(1);
  }

  checkOut(obj) {
    if (obj.status === 'FINALIZADO') {
      this.servico.showMessage('O empregado já concluiu o atendimento.');
    } else if (obj.status === 'AUSENTE') {
      this.servico.showMessage('O empregado já realizou o check-out.');
    } else {
      this.confirmService.show('Deseja realizar o check-out do empregado?', this, function (c) {
        c.getService().checkOut(obj, function (res) {
          c.callPage();
        }, undefined);
      }, undefined, undefined);
    }
  }

  abrirFichaColeta(obj) {
    this.fichaColetaValidator.getProfissional(() => {
      if (this.fichaColetaValidator.profissional) {
        if (obj.status !== 'FINALIZADO' && obj.status !== 'AUSENTE') {
          this.servico.showMessage('Não é possível abrir a ficha de coleta enquanto o empregado estiver em atendimento.');
          return;
        }
        this.checkin = obj;
        this.util.config(this.checkin);
        this.modalFichaColeta.openObject(this.checkin);
      } else {
        this.servico.showMessage('O usuário logado não é um profissional de saúde.');
      }
    });
  }

  imprimirFichaColeta() {
    this.printFichaColeta = true;
    this.helper.print('Ficha de Coleta do(a) Empregado(a): ' + this.checkin.$empregado.$pessoa.$nome,
      () => {
        return document.getElementById('divFichaColeta').innerHTML;
      }, 
      () => {
        this.printFichaColeta = false;
      });
  }

  abrirFichaTriagem(obj) {
    this.fichaColetaValidator.getProfissional(() => {
      if (this.fichaColetaValidator.profissional) {
        if (obj.status !== 'FINALIZADO' && obj.status !== 'AUSENTE') {
          this.servico.showMessage('Não é possível abrir a ficha de coleta enquanto o empregado estiver em atendimento.');
          return;
        }
        let filter: AtendimentoFilter = this.atendimentoService.initializeFilter();
        filter.$pageSize = 100000;
        filter.$checkin.$id = obj['id'];
        filter.$tarefa.$status = 'CONCLUÍDA';
        this.atendimentoService.list(filter, (r) => {
          const l = r.json().list;
          if (l && l.length > 0) {
            this.atendimentos = this.atendimentoService.toList(l);
          } else {
            this.atendimentos = undefined;
          }
        }, undefined);
        this.checkin = obj;
        this.modalFichaTriagem.open();

        this.acolhimento = this.fichaColetaValidator.profissional
          .$equipes.find(e => {
            return this.util.acolhimento && e.$id === this.util.acolhimento.$id;
          }) !== undefined;
      } else {
        this.servico.showMessage('O usuário logado não é um profissional de saúde.');
      }
    });
  }

  criarAtendimento(obj) {
    const usuario: Usuario = this.usuarioService.toObject(JSON.parse(localStorage.getItem('user')));
    const temPermissao = usuario.$perfis.findIndex(p =>
        p.$permissoes.findIndex(pp =>
            pp.$funcionalidade === 'CHECKIN_CRIAR-ATENDIMENTO' &&
            pp.$valor === true) >= 0) >= 0;
            
    if (temPermissao) {
      if (obj.status === 'AGUARDANDO') {
        this.checkin = obj;
        this.atendimento = this.atendimentoService.initializeObject();
        this.atendimento.$checkin = this.checkin;
        this.atendimento.$fila = undefined;
        this.filas = new Array<FilaAtendimento>();
        this.modalCriarAtendimento.openObject(this.atendimento);
      } else {
        this.servico.showMessage('Não é possível encaminhar para atendimento. O status do(a) empregado(a) deve ser AGUARDANDO.');  
      }
    } else {
      this.servico.showMessage('O usuário logado não tem permissão para criar atendimentos.');
    }
  }

  getProfissionaisDisponiveis() {
    this.atendimento.$fila = undefined;
    this.atendimentoService.getFilaAtendimentoService().getListDisponivel(this.atendimento, (res) => {
      const list = res.json();
      if (list && list.length > 0) {
        this.filas = this.atendimentoService.getFilaAtendimentoService().toList(list);
      } else {
        this.filas = new Array<FilaAtendimento>();
      }
    }, undefined);
  }

  encaminharParaAtendimento(atendimento: Atendimento) {
    this.atendimentoService.encaminhar(atendimento, () => {
      this.callPage();
    }, undefined);
  }

  salvar(checkin: Checkin) {
    this.servico.save(this.checkin, (res) => {
      this.modalFichaColeta.close();
      this.page(1);
    }, undefined);
  }
}

export class CheckoutUtil {

  helper:Helper;
  statusCheckins: Array<string>;
  grupos: Array<string>;
  respostaFuma: RespostaFichaColeta;

  nivelAtividadeFisica: Array<string>;
  partesCorpo: Array<string>;
  refereQualidadeAgua: Array<string>;
  simNao: Array<string>;
  tempoAnos: Array<string>;
  tempoMeses: Array<string>;
  intensidade: Array<string>;
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
  
  public acolhimento: Equipe;

  constructor(private servico: CheckinService) {
    this.helper = new Helper();

    let parametroFilter: GenericFilter = new GenericFilter();
    parametroFilter.$pageSize = 1;
    servico.getParametroService().list(parametroFilter, (res) => {
      const p = res.json();
      if (p && p.list && p.list.length > 0) {
        this.acolhimento = servico.getTarefaService().getEquipeService().toObject(p.list[0].acolhimento);
      }
    }, undefined);
  }

  onInit() {

    this.servico.getUtilService().getStatusCheckin('', (list) => {
      this.statusCheckins = list;
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

  config(checkin: Checkin) {
    this.grupos = this.helper.distinct(checkin.$respostas.map(r => r.$pergunta.$grupo.$nome));
    this.respostaFuma = checkin.$respostas.find(r => r.$pergunta.$path === 'fuma');
  }

  checkEquipe(resposta: RespostaFichaColeta, profissional: Profissional) {
    return resposta.$pergunta.$equipes.find(e => profissional.$equipes.find(ee => ee.$id === e.$id) !== undefined) !== undefined;
  }

  addItemRespostaFichaColeta(resposta: RespostaFichaColeta) {
    resposta.$itens.push(this.newItemRespostaFichaColeta(resposta));
  }

  newItemRespostaFichaColeta(resposta: RespostaFichaColeta) {
    const item: ItemRespostaFichaColeta = this.servico.toItem(new ItemRespostaFichaColeta());
    let x = 1;
    for (let i of resposta.$pergunta.$itens) {
      const detalhe: DetalheRespostaFichaColeta = this.servico.toDetalhe(new DetalheRespostaFichaColeta());
      detalhe.$ordem = x;
      detalhe.$item = item;
      item.$detalhes.push(detalhe);
      x++;
    }
    return item;
  }

  processarItemRespostaFichaColeta(resposta: RespostaFichaColeta) {
    if (!resposta.$itens) {
      resposta.$itens = new Array<ItemRespostaFichaColeta>();
    }
    if (resposta.$itens.length === 0) {
      resposta.$itens.push(this.newItemRespostaFichaColeta(resposta));
    }
  }

  checkItemRespostaFichaColeta(resposta: RespostaFichaColeta) {
    if (resposta.$pergunta.$path === 'sim-nao') {
      if (resposta.$conteudo === 'SIM') {
        this.processarItemRespostaFichaColeta(resposta);
      } else {
        resposta.$itens = new Array<ItemRespostaFichaColeta>();
      }
    } else if (resposta.$pergunta.$path === 'fuma') {
      if (resposta.$conteudo && resposta.$conteudo.length > 0 && resposta.$conteudo !== 'NÃO') {
        this.processarItemRespostaFichaColeta(resposta);
      } else {
        resposta.$itens = new Array<ItemRespostaFichaColeta>();
      }
    }
  }

  detalheTemPath(resposta: RespostaFichaColeta, detalhe: DetalheRespostaFichaColeta) {
    return resposta.$pergunta.$itens.find(i => i.$path && i.$path.trim() !== '' && i.$ordem === detalhe.$ordem);
  }

  filterTarefasConcluidas(tarefas) {
    return tarefas.filter(t => t.status !== 'CONCLUÍDA' && t.status !== 'EXECUÇÃO');
  }
}