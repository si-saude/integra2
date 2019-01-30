import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Curso } from '../model/curso.model';
import { CursoFilter } from '../filter/curso.filter';

@Injectable()
export class CursoService extends GenericService<Curso, CursoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService) {
        super(http, 'curso', router, dialogService, spinnerService);
    }

    initializeObject() {
        const curso: Curso = new Curso();
        curso.$id = 0;
        return curso;
    }

    initializeFilter() {
        return new CursoFilter();
    }

    toObject(obj: any): Curso {
        const curso: Curso = new Curso();
        curso.$id = obj['id'];
        curso.$nome = obj['nome'];
        curso.$descricao = obj['descricao'];
        curso.$validade = obj['validade'];
        curso.$version = obj['version'];

        return curso;
    }
}
