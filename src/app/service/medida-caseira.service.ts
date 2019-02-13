import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { MedidaCaseira } from '../model/medida-caseira.model';
import { MedidaCaseiraFilter } from '../filter/medida-caseira.filter';
import { UtilService } from './util.service';

@Injectable()
export class MedidaCaseiraService extends GenericService<MedidaCaseira, MedidaCaseiraFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService) {
        super(http, 'medida-caseira', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new MedidaCaseira();
    }

    initializeFilter() {
        return new MedidaCaseiraFilter();
    }

    toObject(obj: any): MedidaCaseira {
        const medidaCaseira: MedidaCaseira = new MedidaCaseira();
        medidaCaseira.$id = obj['id'];
        medidaCaseira.$descricao = obj['descricao'];
        medidaCaseira.$version = obj['version'];

        return medidaCaseira;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}
