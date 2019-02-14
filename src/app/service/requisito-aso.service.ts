import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { RequisitoAso } from '../model/requisito-aso.model';
import { RequisitoAsoFilter } from '../filter/requisito-aso.filter';

@Injectable()
export class RequisitoAsoService extends GenericService<RequisitoAso, RequisitoAsoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService) {
        super(http, 'requisito-aso', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new RequisitoAso();
    }

    initializeFilter() {
        return new RequisitoAsoFilter();
    }

    toObject(obj: any): RequisitoAso {
        const riscoGhe: RequisitoAso = new RequisitoAso();
        riscoGhe.$id = obj['id'];
        riscoGhe.$conteudo = obj['conteudo'];
        riscoGhe.$version = obj['version'];
        return riscoGhe;
    }
}
