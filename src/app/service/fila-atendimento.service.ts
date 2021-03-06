import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DateFilter } from './../generic/date-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { FilaAtendimento } from '../model/fila-atendimento.model';
import { FilaAtendimentoFilter } from '../filter/fila-atendimento.filter';
import { LocalizacaoService } from './localizacao.service';
import { ProfissionalService } from './profissional.service';
import { Atendimento } from 'app/model/atendimento.model';

@Injectable()
export class FilaAtendimentoService extends GenericService<FilaAtendimento, FilaAtendimentoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private localizacaoService: LocalizacaoService,
        private profissionalService: ProfissionalService) {
        super(http, 'fila-atendimento', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new FilaAtendimento();
    }

    initializeFilter() {
        const f = new FilaAtendimentoFilter();
        f.$data = new DateFilter();
        f.$localizacao = this.localizacaoService.initializeFilter();
        f.$profissional = this.profissionalService.initializeFilter();
        return f;
    }

    transformFilter(filter: FilaAtendimentoFilter) {
        filter = this.transformDateFilter(filter, 'data');
        return filter;
    }

    toObject(obj: any): FilaAtendimento {
        let fila: FilaAtendimento = new FilaAtendimento();
        fila.$id = obj['id'];
        fila.$status = obj['status'];
        fila.$version = obj['version'];
        fila = this.transformDate(obj, fila, 'data');

        if (this.helper.isNotNull(obj['localizacao'])) {
            fila.$localizacao = this.localizacaoService.toObject(obj['localizacao']);
        }

        if (this.helper.isNotNull(obj['profissional'])) {
            fila.$profissional = this.profissionalService.toObject(obj['profissional']);
        }

        return fila;
    }

    getLocalizacaoService() {
        return this.localizacaoService;
    }

    getProfissionalService() {
        return this.profissionalService;
    }

    entrarOuVoltar(t: FilaAtendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/entrar-ou-voltar', t, { headers: this.getHeaders()}) ,
            (res) => {
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    pausar(t: FilaAtendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/pausar', t, { headers: this.getHeaders()}) ,
            (res) => {
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    encerrar(t: FilaAtendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/encerrar', t, { headers: this.getHeaders()}) ,
            (res) => {
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    getListNaoEncerrado(f: FilaAtendimentoFilter, fThen: any, fCatch: any) {
        this.showSpinner();
        this.toPromise(this.http.post(this.rootUrl + this.path + '/get-list-nao-encerrado', f, { headers: this.getHeaders()}) ,
            (res) => {
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    getListDisponivel(atendimento: Atendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        this.toPromise(this.http.post(this.rootUrl + this.path + '/get-list-disponivel', atendimento, { headers: this.getHeaders()}) ,
            (res) => {
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }
}
