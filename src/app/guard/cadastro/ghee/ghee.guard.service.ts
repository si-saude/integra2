import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './ghee.guard';

@Injectable()
export class GheeGuardService implements GenericGuardService {

    constructor(private listar: guard.GheeListarGuard,
                private adicionar: guard.GheeAdicionarGuard,
                private editar: guard.GheeEditarGuard,
                private detalhar: guard.GheeDetalharGuard,
                private remover: guard.GheeRemoverGuard) {
    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'GHEE_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'GHEE_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'GHEE_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'GHEE_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'GHEE_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
