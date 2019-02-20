import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './empregado.guard';

@Injectable()
export class EmpregadoGuardService implements GenericGuardService {

    constructor(private listar: guard.EmpregadoListarGuard,
                private adicionar: guard.EmpregadoAdicionarGuard,
                private editar: guard.EmpregadoEditarGuard,
                private detalhar: guard.EmpregadoDetalharGuard,
                private remover: guard.EmpregadoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'EMPREGADO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'EMPREGADO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'EMPREGADO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'EMPREGADO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'EMPREGADO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
