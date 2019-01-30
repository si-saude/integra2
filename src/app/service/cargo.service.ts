import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Cargo } from '../model/cargo.model';
import { Curso } from '../model/curso.model';
import { CargoFilter } from '../filter/cargo.filter';
import { CursoService } from './../service/curso.service';

@Injectable()
export class CargoService extends GenericService<Cargo, CargoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private cursoService: CursoService) {
        super(http, 'cargo', router, dialogService, spinnerService);
    }

    initializeObject() {
        const cargo: Cargo = new Cargo();
        cargo.$cursos = new Array<Curso>();
        return cargo;
    }

    initializeFilter() {
        return new CargoFilter();
    }

    toObject(obj: any): Cargo {
        const cargo: Cargo = new Cargo();
        cargo.$id = obj['id'];
        cargo.$nome = obj['nome'];
        cargo.$version = obj['version'];
        cargo.$cursos = new Array<Curso>();
        if (obj['cursos']) {
            for (let x = 0; x < obj['cursos'].length; x++) {
                const curso: Curso = this.cursoService.toObject(obj['cursos'][x]);
                cargo.$cursos.push(curso);
            }
        }
        return cargo;
    }

    getCursoService(): CursoService {
        return this.cursoService;
    }
}
