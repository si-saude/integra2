import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './curso.guard';

@Injectable()
export class CursoGuardService implements GenericGuardService {

    constructor(private listar: guard.CursoListarGuard,
                private adicionar: guard.CursoAdicionarGuard,
                private editar: guard.CursoEditarGuard,
                private detalhar: guard.CursoDetalharGuard,
                private remover: guard.CursoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'CURSO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'CURSO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'CURSO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'CURSO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'CURSO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
