import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DateFilter } from './../generic/date-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Ghee } from '../model/ghee.model';
import { GheeFilter  } from '../filter/ghee.filter';
import { UtilService } from './util.service';

@Injectable()
export class GheeService extends GenericService<Ghee, GheeFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService) {
        super(http, 'ghee', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Ghee();
    }

    initializeFilter() {
        const f = new GheeFilter();
        f.$dataCriacao = new DateFilter();
        f.$dataDesativacao = new DateFilter();
        return f;
    }

    transformFilter(filter: GheeFilter) {
        filter = this.transformDateFilter(filter, 'dataCriacao');
        filter = this.transformDateFilter(filter, 'dataDesativacao');
        return filter;
    }

    toObject(obj: any): Ghee {
        let ghee: Ghee = new Ghee();
        ghee.$id = obj['id'];
        ghee.$nome = obj['nome'];
        ghee.$codigo = obj['codigo'];
        ghee.$descricao = obj['descricao'];
        ghee.$version = obj['version'];

        ghee = this.transformDate(obj, 'dataCriacao');
        ghee = this.transformDate(obj, 'dataDesativacao');

        return ghee;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}
