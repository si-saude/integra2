import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { BooleanFilter } from './../generic/boolean-filter';
import { DateFilter } from './../generic/date-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Diagnostico } from '../model/diagnostico.model';
import { DiagnosticoFilter } from '../filter/diagnostico.filter';
import { EixoService } from './eixo.service';

@Injectable()
export class DiagnosticoService extends GenericService<Diagnostico, DiagnosticoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private eixoService: EixoService) {
        super(http, 'diagnostico', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Diagnostico();
    }

    initializeFilter() {
        const f = new DiagnosticoFilter();
        f.$eixo = this.eixoService.initializeFilter();
        f.$inativo = new BooleanFilter();
        return f;
    }

    toObject(obj: any): Diagnostico {
        const diagnostico: Diagnostico = new Diagnostico();
        diagnostico.$id = obj['id'];
        diagnostico.$codigo = obj['codigo'];
        diagnostico.$descricao = obj['descricao'];
        diagnostico.$inativo = obj['inativo'];
        diagnostico.$version = obj['version'];

        if (this.helper.isNotNull(obj['eixo'])) {
            diagnostico.$eixo = this.eixoService.toObject(obj['eixo']);
        }

        return diagnostico;
    }

    getEixoService() {
        return this.eixoService;
    }
}
