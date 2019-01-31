import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Ghe } from '../model/ghe.model';
import { GheFilter } from '../filter/ghe.filter';
import { RiscoGheService } from './risco-ghe.service';

@Injectable()
export class GheService extends GenericService<Ghe, GheFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private riscoGheService: RiscoGheService) {
        super(http, 'ghe', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Ghe();
    }

    initializeFilter() {
        return new GheFilter();
    }

    toObject(obj: any): Ghe {
        const ghe: Ghe = new Ghe();
        ghe.$id = obj['id'];
        ghe.$nome = obj['nome'];
        ghe.$codigo = obj['codigo'];
        ghe.$descricao = obj['descricao'];
        ghe.$descricaoAmbiente = obj['descricaoAmbiente'];
        ghe.$descricaoTarefas = obj['descricaoTarefas'];
        ghe.$duracaoJornada = obj['duracaoJornada'];
        ghe.$version = obj['version'];

        if (obj['risco']) {
            ghe.$risco = this.riscoGheService.toObject(obj['risco']);
        }

        return ghe;
    }
}
