import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './exame.guard';

@Injectable()
export class ExameGuardService implements GenericGuardService {

    constructor(private listar: guard.ExameListarGuard,
                private adicionar: guard.ExameAdicionarGuard,
                private editar: guard.ExameEditarGuard,
                private detalhar: guard.ExameDetalharGuard,
                private remover: guard.ExameRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'EXAME_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'EXAME_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'EXAME_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'EXAME_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'EXAME_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
