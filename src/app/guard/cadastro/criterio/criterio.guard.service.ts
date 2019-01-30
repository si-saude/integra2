import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './criterio.guard';

@Injectable()
export class CriterioGuardService implements GenericGuardService {

    constructor(private listar: guard.CriterioListarGuard,
                private adicionar: guard.CriterioAdicionarGuard,
                private editar: guard.CriterioEditarGuard,
                private detalhar: guard.CriterioDetalharGuard,
                private remover: guard.CriterioRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'CRITERIO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'CRITERIO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'CRITERIO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'CRITERIO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'CRITERIO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
