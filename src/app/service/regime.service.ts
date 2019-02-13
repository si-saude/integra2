import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Regime } from '../model/regime.model';
import { RegimeFilter  } from '../filter/regime.filter';
import { UtilService } from './util.service';

@Injectable()
export class RegimeService extends GenericService<Regime, RegimeFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService) {
        super(http, 'regime', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Regime();
    }

    initializeFilter() {
        return new RegimeFilter();
    }

    toObject(obj: any): Regime {
        const regime: Regime = new Regime();
        regime.$id = obj['id'];
        regime.$nome = obj['nome'];
        regime.$version = obj['version'];
        return regime;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}
