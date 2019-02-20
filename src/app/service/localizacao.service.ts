import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DateFilter } from './../generic/date-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Localizacao } from '../model/localizacao.model';
import { LocalizacaoFilter } from '../filter/localizacao.filter';
import { BaseService } from './base.service';

@Injectable()
export class LocalizacaoService extends GenericService<Localizacao, LocalizacaoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private baseService: BaseService) {
        super(http, 'localizacao', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Localizacao();
    }

    initializeFilter() {
        const f = new LocalizacaoFilter();
        f.$base = this.getBaseService().initializeFilter();
        return f;
    }

    toObject(obj: any): Localizacao {
        const localizacao: Localizacao = new Localizacao();
        localizacao.$id = obj['id'];
        localizacao.$nome = obj['nome'];
        localizacao.$version = obj['version'];

        if (this.helper.isNotNull(obj['base'])) {
            localizacao.$base = this.baseService.toObject(obj['base']);
        }

        return localizacao;
    }

    getBaseService() {
        return this.baseService;
    }
}
