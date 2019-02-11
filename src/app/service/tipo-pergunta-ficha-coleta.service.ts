import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { TipoPerguntaFichaColeta } from '../model/tipo-pergunta-ficha-coleta.model';
import { TipoPerguntaFichaColetaFilter } from '../filter/tipo-pergunta-ficha-coleta.filter';

@Injectable()
export class TipoPerguntaFichaColetaService extends GenericService<TipoPerguntaFichaColeta, TipoPerguntaFichaColetaFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService) {
        super(http, 'tipo-pergunta-ficha-coleta', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new TipoPerguntaFichaColeta();
    }

    initializeFilter() {
        return new TipoPerguntaFichaColetaFilter();
    }

    toObject(obj: any): TipoPerguntaFichaColeta {
        const tipo: TipoPerguntaFichaColeta = new TipoPerguntaFichaColeta();
        tipo.$id = obj['id'];
        tipo.$nome = obj['nome'];
        tipo.$version = obj['version'];
        return tipo;
    }
}
