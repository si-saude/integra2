import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Gerencia } from '../model/gerencia.model';
import { GerenciaFilter } from '../filter/gerencia.filter';
import { BooleanFilter } from 'app/generic/boolean-filter';

@Injectable()
export class GerenciaService extends GenericService<Gerencia, GerenciaFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService) {
        super(http, 'gerencia', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Gerencia();
    }

    initializeFilter() {
        const g = new GerenciaFilter();
        g.$ausentePeriodico = new BooleanFilter();
        return g;
    }

    toObject(obj: any): Gerencia {
        const gerencia: Gerencia = new Gerencia();
        gerencia.$id = obj['id'];
        gerencia.$codigo = obj['codigo'];
        gerencia.$codigoCompleto = obj['codigoCompleto'];
        gerencia.$descricao = obj['descricao'];
        gerencia.$ausentePeriodico = obj['ausentePeriodico'];
        gerencia.$version = obj['version'];

        if (this.helper.isNotNull(obj['gerencia'])) {
            gerencia.$gerencia = this.toObject(obj['gerencia']);
        }

        return gerencia;
    }
}
