import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Cidade } from '../model/cidade.model';
import { CidadeFilter } from '../filter/cidade.filter';
import { UtilService } from './util.service';

@Injectable()
export class CidadeService extends GenericService<Cidade, CidadeFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService) {
        super(http, 'cidade', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Cidade();
    }

    initializeFilter() {
        return new CidadeFilter();
    }

    toObject(obj: any): Cidade {
        const cidade: Cidade = new Cidade();
        cidade.$id = obj['id'];
        cidade.$nome = obj['nome'];
        cidade.$uf = obj['uf'];
        cidade.$version = obj['version'];
        return cidade;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}
