import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { BooleanFilter } from './../generic/boolean-filter';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { EquipeService } from './equipe.service';
import { UtilService } from './util.service';
import { Equipe } from '../model/equipe.model';
import { Servico } from '../model/servico.model';
import { ServicoFilter } from '../filter/servico.filter';

@Injectable()
export class ServicoService extends GenericService<Servico, ServicoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private equipeService: EquipeService,
        private utilService: UtilService) {
        super(http, 'servico', router, dialogService, spinnerService);
    }

    initializeObject() {
        const s = new Servico();
        s.$equipes = new Array<Equipe>();
        return s;
    }

    initializeFilter() {
        const f = new ServicoFilter();
        f.$inativo = new BooleanFilter();
        f.$publico = new BooleanFilter();
        return f;
    }

    toObject(obj: any): Servico {
        const servico: Servico = new Servico();
        servico.$id = obj['id'];
        servico.$nome = obj['nome'];
        servico.$codigo = obj['codigo'];
        servico.$url = obj['url'];
        servico.$grupo = obj['grupo'];
        servico.$inativo = obj['inativo'];
        servico.$publico = obj['publico'];
        servico.$version = obj['version'];
        servico.$equipes = new Array<Equipe>();
        if (obj['equipes']) {
            for (let x = 0; x < obj['equipes'].length; x++) {
                const equipe: Equipe = this.equipeService.toObject(obj['equipes'][x]);
                servico.$equipes.push(equipe);
            }
        }
        return servico;
    }

    getEquipeService() {
        return this.equipeService;
    }

    getUtilService() {
        return this.utilService;
    }
}
