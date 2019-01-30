import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Base } from '../model/base.model';
import { BaseFilter } from '../filter/base.filter';
import { UtilService } from './util.service';

@Injectable()
export class BaseService extends GenericService<Base, BaseFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService) {
        super(http, 'base', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Base();
    }

    initializeFilter() {
        return new BaseFilter();
    }

    toObject(obj: any): Base {
        const base: Base = new Base();
        base.$id = obj['id'];
        base.$nome = obj['nome'];
        base.$uf = obj['uf'];
        base.$version = obj['version'];
        return base;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}
