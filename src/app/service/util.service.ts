import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { GenericFilter } from '../generic/generic-filter';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

@Injectable()
export class UtilService extends GenericService<Object, GenericFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService) {
        super(http, 'generic', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Object();
    }

    initializeFilter() {
        return new GenericFilter();
    }

    toObject(obj: any): Object {
        return this.initializeObject();
    }

    getOperador(filter: string, fThen: any, fCatch: any) {
        this.genericGet('operador', filter, fThen, fCatch);
    }

    getSexo(filter: string, fThen: any, fCatch: any) {
        this.genericGet('sexo', filter, fThen, fCatch);
    }

    getTipoCriterio(filter: string, fThen: any, fCatch: any) {
        this.genericGet('tipo-criterio', filter, fThen, fCatch);
    }

    getTypeFilter(filter: string, fThen: any, fCatch: any) {
        this.genericGet('type-filter', filter, fThen, fCatch);
    }

    getUf(filter: string, fThen: any, fCatch: any) {
        this.genericGet('uf', filter, fThen, fCatch);
    }

    getTipoAlimento(filter: string, fThen: any, fCatch: any) {
        this.genericGet('tipo-alimento', filter, fThen, fCatch);
    }

    private genericGet(path: string, filter: string, fThen: any, fCatch: any) {
        this.toPromise(this.http.get(this.rootUrl + this.path + '/' + path + '?filter=' + filter, { headers: this.getHeaders() }  ),
            function (res) {
                if (fThen) {
                    fThen(res.json());
                }
            }, fCatch, undefined);
    }
}
