import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './risco-ghe.guard';

@Injectable()
export class RiscoGheGuardService implements GenericGuardService {

    constructor(private listar: guard.RiscoGheListarGuard,
                private adicionar: guard.RiscoGheAdicionarGuard,
                private editar: guard.RiscoGheEditarGuard,
                private detalhar: guard.RiscoGheDetalharGuard,
                private remover: guard.RiscoGheRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'RISCO-GHE_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'RISCO-GHE_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'RISCO-GHE_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'RISCO-GHE_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'RISCO-GHE_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
