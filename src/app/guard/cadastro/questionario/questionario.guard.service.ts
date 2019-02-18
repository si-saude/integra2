import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './questionario.guard';

@Injectable()
export class QuestionarioGuardService implements GenericGuardService {

    constructor(private listar: guard.QuestionarioListarGuard,
                private adicionar: guard.QuestionarioAdicionarGuard,
                private editar: guard.QuestionarioEditarGuard,
                private detalhar: guard.QuestionarioDetalharGuard,
                private remover: guard.QuestionarioRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'QUESTIONARIO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'QUESTIONARIO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'QUESTIONARIO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'QUESTIONARIO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'QUESTIONARIO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
