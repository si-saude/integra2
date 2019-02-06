import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Clinica } from '../model/clinica.model';
import { Exame } from '../model/exame.model';
import { ClinicaFilter } from '../filter/clinica.filter';
import { ExameService } from './../service/exame.service';
import { UtilService } from './../service/util.service';

@Injectable()
export class ClinicaService extends GenericService<Clinica, ClinicaFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private exameService: ExameService,
        private utilService: UtilService) {
        super(http, 'clinica', router, dialogService, spinnerService);
    }

    initializeObject() {
        const clinica: Clinica = new Clinica();
        clinica.$exames = new Array<Exame>();
        return clinica;
    }

    initializeFilter() {
        return new ClinicaFilter();
    }

    toObject(obj: any): Clinica {
        const clinica: Clinica = new Clinica();
        clinica.$id = obj['id'];
        clinica.$nome = obj['nome'];
        clinica.$endereco = obj['endereco'];
        clinica.$telefones = obj['telefones'];
        clinica.$uf = obj['uf'];
        clinica.$version = obj['version'];
        clinica.$exames = new Array<Exame>();
        if (obj['exames']) {
            for (let x = 0; x < obj['exames'].length; x++) {
                const exame: Exame = this.exameService.toObject(obj['exames'][x]);
                clinica.$exames.push(exame);
            }
        }
        return clinica;
    }

    getExameService(): ExameService {
        return this.exameService;
    }

    getUtilService(): UtilService {
        return this.utilService;
    }
}
