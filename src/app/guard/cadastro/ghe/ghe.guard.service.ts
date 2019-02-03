import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './ghe.guard';

@Injectable()
export class GheGuardService implements GenericGuardService {

    constructor(private listar: guard.GheListarGuard,
                private adicionar: guard.GheAdicionarGuard,
                private editar: guard.GheEditarGuard,
                private detalhar: guard.GheDetalharGuard,
                private remover: guard.GheRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'GHE_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'GHE_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'GHE_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'GHE_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'GHE_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
