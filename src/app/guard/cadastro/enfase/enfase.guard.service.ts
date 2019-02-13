import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './enfase.guard';

@Injectable()
export class EnfaseGuardService implements GenericGuardService {

    constructor(private listar: guard.EnfaseListarGuard,
                private adicionar: guard.EnfaseAdicionarGuard,
                private editar: guard.EnfaseEditarGuard,
                private detalhar: guard.EnfaseDetalharGuard,
                private remover: guard.EnfaseRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'ENFASE_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'ENFASE_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'ENFASE_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'ENFASE_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'ENFASE_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
