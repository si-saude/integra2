import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Exame } from '../model/exame.model';
import { ExameFilter } from '../filter/exame.filter';
import { CampoExame } from '../model/campo-exame.model';
import { CampoExameValidator } from './../controller/cadastro/exame/campo-exame.validator';

@Injectable()
export class ExameService extends GenericService<Exame, ExameFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private campoExameValidator: CampoExameValidator) {
        super(http, 'exame', router, dialogService, spinnerService);
    }

    initializeObject() {
        const exame: Exame = new Exame();
        exame.$campoExames = new Array<CampoExame>();
        return exame;
    }

    initializeCampoExame() {
        return new CampoExame();
    }

    initializeFilter() {
        return new ExameFilter();
    }

    toObject(obj: any): Exame {
        const exame: Exame = new Exame();
        exame.$id = obj['id'];
        exame.$codigo = obj['codigo'];
        exame.$descricao = obj['descricao'];
        exame.$ordem = obj['ordem'];
        exame.$version = obj['version'];
        exame.$campoExames = new Array<CampoExame>();
        if (obj['campoExames']) {
            for (let x = 0; x < obj['campoExames'].length; x++) {
                const campo: CampoExame = this.toCampoExame(obj['campoExames'][x]);
                campo.$exame.$id = exame.$id;
                exame.$campoExames.push(campo);
            }
        }
        return exame;
    }

    toCampoExame(obj: CampoExame): CampoExame {
        const campo: CampoExame = new CampoExame();
        campo.$id = obj['id'];
        campo.$exame = new Exame();
        campo.$codigo = obj['codigo'];
        campo.$titulo = obj['titulo'];
        campo.$numeroLinhas = obj['numeroLinhas'];
        campo.$version = obj['version'];
        return campo;
    }

    getCampoExameValidator() {
        return this.campoExameValidator;
    }
}
