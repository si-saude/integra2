import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { RiscoGhe } from '../model/risco-ghe.model';
import { RiscoGheFilter } from '../filter/risco-ghe.filter';

@Injectable()
export class RiscoGheService extends GenericService<RiscoGhe, RiscoGheFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService) {
        super(http, 'risco-ghe', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new RiscoGhe();
    }

    initializeFilter() {
        return new RiscoGheFilter();
    }

    toObject(obj: any): RiscoGhe {
        const riscoGhe: RiscoGhe = new RiscoGhe();
        riscoGhe.$id = obj['id'];
        riscoGhe.$titulo = obj['titulo'];
        riscoGhe.$version = obj['version'];
        return riscoGhe;
    }
}
