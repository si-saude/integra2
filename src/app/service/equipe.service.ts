import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Equipe } from '../model/equipe.model';
import { EquipeFilter } from '../filter/equipe.filter';

@Injectable()
export class EquipeService extends GenericService<Equipe, EquipeFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService) {
        super(http, 'equipe', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Equipe();
    }

    initializeFilter() {
        return new EquipeFilter();
    }

    toObject(obj: any): Equipe {
        const equipe: Equipe = new Equipe();
        equipe.$id = obj['id'];
        equipe.$nome = obj['nome'];
        equipe.$abreviacao = obj['abreviacao'];
        equipe.$prioridadeSast = obj['prioridadeSast'];
        equipe.$version = obj['version'];
        return equipe;
    }
}
