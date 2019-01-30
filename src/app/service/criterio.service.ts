import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Criterio } from '../model/criterio.model';
import { CriterioFilter } from '../filter/criterio.filter';
import { UtilService } from './util.service';

@Injectable()
export class CriterioService extends GenericService<Criterio, CriterioFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService) {
        super(http, 'criterio', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Criterio();
    }

    initializeFilter() {
        return new CriterioFilter();
    }

    toObject(obj: any): Criterio {
        const criterio: Criterio = new Criterio();
        criterio.$id = obj['id'];
        criterio.$nome = obj['nome'];
        criterio.$tipo = obj['tipo'];
        criterio.$operador = obj['operador'];
        criterio.$valor = obj['valor'];
        criterio.$version = obj['version'];
        return criterio;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}
