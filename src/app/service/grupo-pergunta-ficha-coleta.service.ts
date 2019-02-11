import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { GrupoPerguntaFichaColeta } from '../model/grupo-pergunta-ficha-coleta.model';
import { GrupoPerguntaFichaColetaFilter } from '../filter/grupo-pergunta-ficha-coleta.filter';

@Injectable()
export class GrupoPerguntaFichaColetaService extends GenericService<GrupoPerguntaFichaColeta, GrupoPerguntaFichaColetaFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService) {
        super(http, 'grupo-pergunta-ficha-coleta', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new GrupoPerguntaFichaColeta();
    }

    initializeFilter() {
        return new GrupoPerguntaFichaColetaFilter();
    }

    toObject(obj: any): GrupoPerguntaFichaColeta {
        const grupo: GrupoPerguntaFichaColeta = new GrupoPerguntaFichaColeta();
        grupo.$id = obj['id'];
        grupo.$nome = obj['nome'];
        grupo.$ordem = obj['ordem'];
        grupo.$version = obj['version'];
        return grupo;
    }
}
