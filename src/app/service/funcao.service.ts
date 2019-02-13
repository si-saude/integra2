import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Funcao } from '../model/funcao.model';
import { FuncaoFilter  } from '../filter/funcao.filter';
import { UtilService } from './util.service';

@Injectable()
export class FuncaoService extends GenericService<Funcao, FuncaoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService) {
        super(http, 'funcao', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Funcao();
    }

    initializeFilter() {
        return new FuncaoFilter();
    }

    toObject(obj: any): Funcao {
        const funcao: Funcao = new Funcao();
        funcao.$id = obj['id'];
        funcao.$nome = obj['nome'];
        funcao.$version = obj['version'];
        return funcao;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}
