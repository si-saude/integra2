import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DateFilter } from './../generic/date-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Checkin } from '../model/checkin.model';
import { Tarefa } from '../model/tarefa.model';
import { CheckinFilter } from '../filter/checkin.filter';
import { EmpregadoService } from './empregado.service';
import { LocalizacaoService } from './localizacao.service';
import { ServicoService } from './servico.service';
import { TarefaService } from './tarefa.service';
import { UtilService } from './util.service';

@Injectable()
export class CheckinService extends GenericService<Checkin, CheckinFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private empregadoService: EmpregadoService,
        private servicoService: ServicoService, private localizacaoService: LocalizacaoService,
        private tarefaService: TarefaService, private utilService: UtilService) {
        super(http, 'checkin', router, dialogService, spinnerService);
    }

    initializeObject() {
        const checkin: Checkin = new Checkin();
        checkin.$tarefas = new Array<Tarefa>();
        return checkin;
    }

    initializeFilter() {
        const f = new CheckinFilter();
        f.$chegada = new DateFilter();
        f.$empregado = this.empregadoService.initializeFilter();
        f.$localizacao = this.localizacaoService.initializeFilter();
        f.$servico = this.servicoService.initializeFilter();
        return f;
    }

    toObject(obj: any): Checkin {
        let checkin: Checkin = new Checkin();
        checkin.$id = obj['id'];
        checkin.$status = obj['status'];
        checkin.$version = obj['version'];

        checkin = this.transformDate(obj, checkin, 'atualizacao');
        checkin = this.transformDate(obj, checkin, 'chegada');

        if (this.helper.isNotNull(obj['empregado'])) {
            checkin.$empregado = this.empregadoService.toObject(obj['empregado']);
        }

        if (this.helper.isNotNull(obj['servico'])) {
            checkin.$servico = this.servicoService.toObject(obj['servico']);
        }

        if (this.helper.isNotNull(obj['localizacao'])) {
            checkin.$localizacao = this.localizacaoService.toObject(obj['localizacao']);
        }

        checkin.$tarefas = new Array<Tarefa>();
        if (obj['tarefas']) {
            for (let x = 0; x < obj['tarefas'].length; x++) {
                const tarefa: Tarefa = this.tarefaService.toObject(obj['tarefas'][x]);
                checkin.$tarefas.push(tarefa);
            }
        }

        return checkin;
    }

    getEmpregadoService() {
        return this.empregadoService;
    }

    getLocalizacaoService() {
        return this.localizacaoService;
    }

    getServicoService() {
        return this.servicoService;
    }

    getTarefaService() {
        return this.tarefaService;
    }

    getUtilService() {
        return this.utilService;
    }

    registrar(t: Checkin, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/registrar', t, { headers: this.getHeaders()}) ,
            (res) => {
                this.showMessage(res._body);
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    checkOut(t: Checkin, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/checkOut', t, { headers: this.getHeaders()}) ,
            (res) => {
                this.showMessage(res._body);
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }
}
