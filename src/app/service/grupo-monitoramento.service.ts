import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { BooleanFilter } from './../generic/boolean-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { GrupoMonitoramento } from '../model/grupo-monitoramento.model';
import { GrupoMonitoramentoFilter } from '../filter/grupo-monitoramento.filter';
import { Avaliacao } from '../model/avaliacao.model';
import { TipoGrupoMonitoramentoService } from './tipo-grupo-monitoramento.service';

@Injectable()
export class GrupoMonitoramentoService extends GenericService<GrupoMonitoramento, GrupoMonitoramentoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private tipoGrupoMonitoramentoService: TipoGrupoMonitoramentoService) {
        super(http, 'grupo-monitoramento', router, dialogService, spinnerService);
    }

    initializeObject() {
        const i = new GrupoMonitoramento();
        i.$avaliacoes = new Array<Avaliacao>();
        return i;
    }

    initializeAvaliacao() {
        return new Avaliacao();
    }

    initializeFilter() {
        const f = new GrupoMonitoramentoFilter();
        f.$tipoGrupoMonitoramento = this.tipoGrupoMonitoramentoService.initializeFilter();
        f.$recorrente = new BooleanFilter();
        f.$relatorio = new BooleanFilter();
        f.$auditoriaAso = new BooleanFilter();
        return f;
    }

    toObject(obj: any): GrupoMonitoramento {
        const grupoMonitoramento: GrupoMonitoramento = new GrupoMonitoramento();
        grupoMonitoramento.$id = obj['id'];
        grupoMonitoramento.$nome = obj['nome'];
        grupoMonitoramento.$recorrente = obj['recorrente'];
        grupoMonitoramento.$relatorio = obj['relatorio'];
        grupoMonitoramento.$auditoriaAso = obj['auditoriaAso'];
        grupoMonitoramento.$version = obj['version'];

        if (this.helper.isNotNull(obj['tipoGrupoMonitoramento'])) {
            grupoMonitoramento.$tipoGrupoMonitoramento = this.tipoGrupoMonitoramentoService.toObject(obj['tipoGrupoMonitoramento']);
        }

        grupoMonitoramento.$avaliacoes = new Array<Avaliacao>();
        if (obj['avaliacoes']) {
            for (let x = 0; x < obj['avaliacoes'].length; x++) {
                const avaliacao: Avaliacao = this.toAvaliacao(obj['avaliacoes'][x]);
                avaliacao.$grupoMonitoramento.$id = grupoMonitoramento.$id;
                grupoMonitoramento.$avaliacoes.push(avaliacao);
            }
        }
        return grupoMonitoramento;
    }

    toAvaliacao(obj: Avaliacao): Avaliacao {
        const avaliacao: Avaliacao = new Avaliacao();
        avaliacao.$id = obj['id'];
        avaliacao.$nome = obj['nome'];
        avaliacao.$auditoriaAso = obj['auditoriaAso'];
        avaliacao.$auditoriaMedico = obj['auditoriaMedico'];
        avaliacao.$version = obj['version'];

        avaliacao.$grupoMonitoramento = new GrupoMonitoramento();
        return avaliacao;
    }

    getTipoGrupoMonitoramentoService() {
        return this.tipoGrupoMonitoramentoService;
    }
}
