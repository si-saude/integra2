import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Imovel } from '../model/imovel.model';
import { ImovelFilter } from '../filter/imovel.filter';
import { BaseService } from './base.service';

@Injectable()
export class ImovelService extends GenericService<Imovel, ImovelFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private baseService: BaseService) {
        super(http, 'imovel', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Imovel();
    }

    initializeFilter() {
        return new ImovelFilter();
    }

    toObject(obj: any): Imovel {
        const imovel: Imovel = new Imovel();
        imovel.$id = obj['id'];
        imovel.$nome = obj['nome'];
        imovel.$version = obj['version'];

        if (this.helper.isNotNull(obj['base'])) {
            imovel.$base = this.baseService.toObject(obj['base']);
        }

        return imovel;
    }

    public getBaseService(): BaseService {
        return this.baseService;
    }
}
