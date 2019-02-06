import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DateFilter } from './../generic/date-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Eixo } from '../model/eixo.model';
import { EixoFilter } from '../filter/eixo.filter';
import { EquipeService } from './equipe.service';

@Injectable()
export class EixoService extends GenericService<Eixo, EixoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private equipeService: EquipeService) {
        super(http, 'eixo', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Eixo();
    }

    initializeFilter() {
        const f = new EixoFilter();
        f.$equipe = this.getEquipeService().initializeFilter();
        return f;
    }

    toObject(obj: any): Eixo {
        const eixo: Eixo = new Eixo();
        eixo.$id = obj['id'];
        eixo.$titulo = obj['titulo'];
        eixo.$version = obj['version'];

        if (this.helper.isNotNull(obj['equipe'])) {
            eixo.$equipe = this.equipeService.toObject(obj['equipe']);
        }

        return eixo;
    }

    getEquipeService() {
        return this.equipeService;
    }
}
