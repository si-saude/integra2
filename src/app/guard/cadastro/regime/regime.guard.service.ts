import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './regime.guard';

@Injectable()
export class RegimeGuardService implements GenericGuardService {

    constructor(private listar: guard.RegimeListarGuard,
                private adicionar: guard.RegimeAdicionarGuard,
                private editar: guard.RegimeEditarGuard,
                private detalhar: guard.RegimeDetalharGuard,
                private remover: guard.RegimeRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'REGIME_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'REGIME_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'REGIME_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'REGIME_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'REGIME_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
