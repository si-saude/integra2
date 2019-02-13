import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './alimento.guard';

@Injectable()
export class AlimentoGuardService implements GenericGuardService {

    constructor(private listar: guard.AlimentoListarGuard,
                private adicionar: guard.AlimentoAdicionarGuard,
                private editar: guard.AlimentoEditarGuard,
                private detalhar: guard.AlimentoDetalharGuard,
                private remover: guard.AlimentoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'ALIMENTO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'ALIMENTO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'ALIMENTO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'ALIMENTO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'ALIMENTO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
