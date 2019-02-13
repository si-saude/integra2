import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { AtividadeFisica } from '../model/atividade-fisica.model';
import { AtividadeFisicaFilter } from '../filter/atividade-fisica.filter';
import { UtilService } from './util.service';

@Injectable()
export class AtividadeFisicaService extends GenericService<AtividadeFisica, AtividadeFisicaFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService) {
        super(http, 'atividade-fisica', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new AtividadeFisica();
    }

    initializeFilter() {
        return new AtividadeFisicaFilter();
    }

    toObject(obj: any): AtividadeFisica {
        const atividadeFisica: AtividadeFisica = new AtividadeFisica();
        atividadeFisica.$id = obj['id'];
        atividadeFisica.$descricao = obj['descricao'];
        atividadeFisica.$version = obj['version'];
        return atividadeFisica;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}
