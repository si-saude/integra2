import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { BooleanFilter } from './../generic/boolean-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Intervencao } from '../model/intervencao.model';
import { IntervencaoFilter } from '../filter/intervencao.filter';
import { EquipeService } from './equipe.service';

@Injectable()
export class IntervencaoService extends GenericService<Intervencao, IntervencaoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private equipeService: EquipeService) {
        super(http, 'intervencao', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Intervencao();
    }

    initializeFilter() {
        const f = new IntervencaoFilter();
        f.$equipe = this.getEquipeService().initializeFilter();
        f.$inativo = new BooleanFilter();
        return f;
    }

    toObject(obj: any): Intervencao {
        const intervencao: Intervencao = new Intervencao();
        intervencao.$id = obj['id'];
        intervencao.$descricao = obj['descricao'];
        intervencao.$inativo = obj['inativo'];
        intervencao.$version = obj['version'];

        if (this.helper.isNotNull(obj['equipe'])) {
            intervencao.$equipe = this.equipeService.toObject(obj['equipe']);
        }

        return intervencao;
    }

    getEquipeService() {
        return this.equipeService;
    }
}
