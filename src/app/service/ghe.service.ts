import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DateFilter } from './../generic/date-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Ghe } from '../model/ghe.model';
import { GheFilter } from '../filter/ghe.filter';
import { RiscoGheService } from './risco-ghe.service';
import { UtilService } from './util.service';

@Injectable()
export class GheService extends GenericService<Ghe, GheFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private riscoGheService: RiscoGheService,
        private utilService: UtilService) {
        super(http, 'ghe', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Ghe();
    }

    initializeFilter() {
        const f = new GheFilter();
        f.$dataCriacao = new DateFilter();
        f.$dataDesativacao = new DateFilter();
        return f;
    }

    transformFilter(filter: GheFilter) {
        filter = this.transformDateFilter(filter, 'dataCriacao');
        filter = this.transformDateFilter(filter, 'dataDesativacao');
        return filter;
    }

    toObject(obj: any): Ghe {
        let ghe: Ghe = new Ghe();
        ghe.$id = obj['id'];
        ghe.$nome = obj['nome'];
        ghe.$codigo = obj['codigo'];
        ghe.$descricao = obj['descricao'];
        ghe.$descricaoAmbiente = obj['descricaoAmbiente'];
        ghe.$descricaoTarefas = obj['descricaoTarefas'];
        ghe.$duracaoJornada = obj['duracaoJornada'];
        ghe.$version = obj['version'];
        ghe = this.transformDate(obj, ghe, 'dataCriacao');
        ghe = this.transformDate(obj, ghe, 'dataDesativacao');

        if (this.helper.isNotNull(obj['risco'])) {
            ghe.$risco = this.riscoGheService.toObject(obj['risco']);
        }

        return ghe;
    }

    getRiscoGheService() {
        return this.riscoGheService;
    }

    getUtilService() {
        return this.utilService;
    }
}
