import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { GenericFilter } from '../generic/generic-filter';
import { GenericService } from '../generic/generic-service';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Parametro } from '../model/parametro.model';
import { EquipeService } from './equipe.service';
import { RegraAtendimentoService } from './regra-atendimento.service';

@Injectable()
export class ParametroService extends GenericService<Parametro, GenericFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private regraAtendimentoService: RegraAtendimentoService, 
        private equipeService: EquipeService) {
        super(http, 'parametro', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Parametro();
    }

    initializeFilter() {
        return new GenericFilter();
    }

    toObject(obj: any): Parametro {
        const parametro: Parametro = new Parametro();
        parametro.$id = obj['id'];
        parametro.$version = obj['version'];

        if (this.helper.isNotNull(obj['regraPeriodico'])) {
            parametro.$regraPeriodico = this.regraAtendimentoService.toObject(obj['regraPeriodico']);
        }

        if (this.helper.isNotNull(obj['acolhimento'])) {
            parametro.$acolhimento = this.equipeService.toObject(obj['acolhimento']);
        }

        return parametro;
    }

    getRegraAtendimentoService(): RegraAtendimentoService {
        return this.regraAtendimentoService;
    }

    getEquipeService(): EquipeService {
        return this.equipeService;
    }
}
