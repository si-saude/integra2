import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Enfase } from '../model/enfase.model';
import { EnfaseFilter  } from '../filter/enfase.filter';
import { UtilService } from './util.service';

@Injectable()
export class EnfaseService extends GenericService<Enfase, EnfaseFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService) {
        super(http, 'enfase', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Enfase();
    }

    initializeFilter() {
        return new EnfaseFilter();
    }

    toObject(obj: any): Enfase {
        const enfase: Enfase = new Enfase();
        enfase.$id = obj['id'];
        enfase.$descricao = obj['descricao'];
        enfase.$version = obj['version'];
        return enfase;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}
