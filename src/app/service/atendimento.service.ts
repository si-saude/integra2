import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { BooleanFilter } from './../generic/boolean-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Atendimento } from '../model/atendimento.model';
import { AtendimentoAtividadeFisica } from '../model/atendimento-atividade-fisica.model';
import { Avaliacao } from '../model/avaliacao.model';
import { AvaliacaoFisica } from '../model/avaliacao-fisica.model';
import { Triagem } from '../model/triagem.model';
import { AtendimentoFilter } from '../filter/atendimento.filter';
import { AtividadeFisicaService } from './atividade-fisica.service';
import { CheckinService } from './checkin.service';
import { FilaAtendimentoService } from './fila-atendimento.service';
import { GrupoMonitoramentoService } from './grupo-monitoramento.service';
import { IndicadorSastService } from './indicador-sast.service';
import { UtilService } from './util.service';
import { TarefaService } from './tarefa.service';

@Injectable()
export class AtendimentoService extends GenericService<Atendimento, AtendimentoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private tarefaService: TarefaService,
        private filaService: FilaAtendimentoService, private checkinService: CheckinService,
        private indicadorService: IndicadorSastService, private utilService: UtilService,
        private atividadeFisicaService: AtividadeFisicaService,
        private grupoMonitoramentoService: GrupoMonitoramentoService) {
        super(http, 'atendimento', router, dialogService, spinnerService);
    }

    initializeObject() {
        const a = new Atendimento();
        a.$triagens = new Array<Triagem>();
        return a;
    }

    initializeAvaliacaoFisica() {
        const av = new AvaliacaoFisica();
        av.$atendimento = new Atendimento();
        av.$atendimentoAtividadesFisicas = new Array<AtendimentoAtividadeFisica>();
        return av;
    }

    initializeFilter() {
        const a = new AtendimentoFilter();
        a.$checkin = this.checkinService.initializeFilter();
        a.$fila = this.filaService.initializeFilter();
        a.$tarefa = this.tarefaService.initializeFilter();
        a.$acolhimento = new BooleanFilter();

        return a;
    }

    toObject(obj: any): Atendimento {
        const atendimento: Atendimento = new Atendimento();
        atendimento.$id = obj['id'];
        atendimento.$acolhimento = obj['acolhimento'];
        atendimento.$version = obj['version'];

        if (this.helper.isNotNull(obj['checkin'])) {
            atendimento.$checkin = this.checkinService.toObject(obj['checkin']);
        }

        if (this.helper.isNotNull(obj['tarefa'])) {
            atendimento.$tarefa = this.tarefaService.toObject(obj['tarefa']);
        }

        if (this.helper.isNotNull(obj['fila'])) {
            atendimento.$fila = this.filaService.toObject(obj['fila']);
        }
        
        if (this.helper.isNotNull(obj['avaliacaoFisica'])) {
            atendimento.$avaliacaoFisica = this.toAvaliacaoFisica(obj['avaliacaoFisica']);
            atendimento.$avaliacaoFisica.$atendimento = new Atendimento();
            atendimento.$avaliacaoFisica.$atendimento.$id = atendimento.$id;
        }

        atendimento.$triagens = new Array<Triagem>();
        if (obj['triagens']) {
            for (let x = 0; x < obj['triagens'].length; x++) {
                const triagem: Triagem
                    = this.toTriagem(obj['triagens'][x]);
                triagem.$atendimento.$id = atendimento.$id;
                atendimento.$triagens.push(triagem);
            }
        }

        return atendimento;
    }

    toAvaliacaoFisica(obj: AvaliacaoFisica): AvaliacaoFisica {
        const avaliacaoFisica: AvaliacaoFisica = new AvaliacaoFisica();
        avaliacaoFisica.$id = obj['id'];
        avaliacaoFisica.$pratica = obj['pratica'];
        avaliacaoFisica.$interesse = obj['interesse'];
        avaliacaoFisica.$acao = obj['acao'];
        avaliacaoFisica.$observacoes = obj['observacoes'];
        avaliacaoFisica.$version = obj['version'];

        avaliacaoFisica.$atendimentoAtividadesFisicas = new Array<AtendimentoAtividadeFisica>();
        if (obj['atendimentoAtividadesFisicas']) {
            for (let x = 0; x < obj['atendimentoAtividadesFisicas'].length; x++) {
                const atendimentoAtividadeFisica: AtendimentoAtividadeFisica
                    = this.toAtendimentoAtividadeFisica(obj['atendimentoAtividadesFisicas'][x]);
                atendimentoAtividadeFisica.$avaliacaoFisica.$id = avaliacaoFisica.$id;
                avaliacaoFisica.$atendimentoAtividadesFisicas.push(atendimentoAtividadeFisica);
            }
        }

        return avaliacaoFisica;
    }

    toTriagem(obj: Triagem): Triagem {
        const triagem: Triagem = new Triagem();
        triagem.$id = obj['id'];
        triagem.$atendimento = new Atendimento();
        triagem.$indice = obj['indice'];
        triagem.$codigo = obj['codigo'];
        triagem.$version = obj['version'];

        if (this.helper.isNotNull(obj['indicador'])) {
            triagem.$indicador = this.indicadorService.toObject(obj['indicador']);
        }

        return triagem;
    }

    toAtendimentoAtividadeFisica(obj: AtendimentoAtividadeFisica): AtendimentoAtividadeFisica {
        const atendimentoAtividadeFisica: AtendimentoAtividadeFisica = new AtendimentoAtividadeFisica();
        atendimentoAtividadeFisica.$id = obj['id'];
        atendimentoAtividadeFisica.$avaliacaoFisica = new AvaliacaoFisica();

        atendimentoAtividadeFisica.$domingo = obj['domingo'];
        atendimentoAtividadeFisica.$segunda = obj['segunda'];
        atendimentoAtividadeFisica.$terca = obj['terca'];
        atendimentoAtividadeFisica.$quarta = obj['quarta'];
        atendimentoAtividadeFisica.$quinta = obj['quinta'];
        atendimentoAtividadeFisica.$sexta = obj['sexta'];
        atendimentoAtividadeFisica.$sabado = obj['sabado'];
        atendimentoAtividadeFisica.$minutos = obj['minutos'];
        atendimentoAtividadeFisica.$total = obj['total'];
        atendimentoAtividadeFisica.$classificacao = obj['classificacao'];
        atendimentoAtividadeFisica.$tipo = obj['tipo'];
        atendimentoAtividadeFisica.$observacao = obj['observacao'];
        atendimentoAtividadeFisica.$version = obj['version'];

        if (this.helper.isNotNull(obj['atividade'])) {
            atendimentoAtividadeFisica.$atividade = this.atividadeFisicaService.toObject(obj['atividade']);
        }

        return atendimentoAtividadeFisica;
    }

    toAvaliacao(obj: any): Avaliacao {
        const avaliacao: Avaliacao = new Avaliacao();
        avaliacao.$id = obj['id'];
        avaliacao.$nome = obj['nome'];
        avaliacao.$auditoriaAso = obj['auditoriaAso'];
        avaliacao.$auditoriaMedico = obj['auditoriaMedico'];
        avaliacao.$version = obj['version'];

        if (this.helper.isNotNull(obj['grupoMonitoramento'])) {
            avaliacao.$grupoMonitoramento = this.grupoMonitoramentoService.toObject(obj['grupoMonitoramento']);
        }

        return avaliacao;
    }

    getListAtendimentosAguardandoEmpregadoByLocalizacao(t: Atendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path +
            '/get-list-atendimentos-aguardando-empregado-by-localizacao', t, { headers: this.getHeaders()}) ,
            (res) => {
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    getListFilasAtendimentoByLocalizacao(t: Atendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path +
            '/get-list-filas-atendimento-by-localizacao', t, { headers: this.getHeaders()}) ,
            (res) => {
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    public getFilaAtendimentoService(): FilaAtendimentoService {
        return this.filaService;
    }

    public getTarefaService(): TarefaService {
        return this.tarefaService;
    }

    public getCheckinService() : CheckinService {
        return this.checkinService;
    }

    public getIndicadorSastService(): IndicadorSastService {
        return this.indicadorService;
    }

    public getAtividadeFisicaService(): AtividadeFisicaService {
        return this.atividadeFisicaService;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }

    iniciar(t: Atendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/iniciar', t, { headers: this.getHeaders()}) ,
            (res) => {
                this.showMessage(res._body);
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    liberar(t: Atendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/liberar', t, { headers: this.getHeaders()}) ,
            (res) => {
                this.showMessage(res._body);
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    finalizar(t: Atendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        this.toPromise(this.http.post(this.rootUrl + this.path + '/finalizar', t, { headers: this.getHeaders()}) ,
            (res) => {
                this.showMessage(res._body);
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    devolver(t: Atendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/devolver', t, { headers: this.getHeaders()}) ,
            (res) => {
                this.showMessage(res._body);
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    registrarAusencia(t: Atendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/registrar-ausencia', t, { headers: this.getHeaders()}) ,
            (res) => {
                this.showMessage(res._body);
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    encaminhar(t: Atendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/encaminhar', t, { headers: this.getHeaders()}) ,
            (res) => {
                this.showMessage(res._body);
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    encaminharAvulso(t: Atendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/encaminhar-avulso', t, { headers: this.getHeaders()}) ,
            (res) => {
                this.showMessage(res._body);
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }
}
