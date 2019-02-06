import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './eixo.guard';

@Injectable()
export class EixoGuardService implements GenericGuardService {

    constructor(private listar: guard.EixoListarGuard,
                private adicionar: guard.EixoAdicionarGuard,
                private editar: guard.EixoEditarGuard,
                private detalhar: guard.EixoDetalharGuard,
                private remover: guard.EixoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'EIXO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'EIXO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'EIXO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'EIXO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'EIXO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
