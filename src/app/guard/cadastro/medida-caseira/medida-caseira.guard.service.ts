import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './medida-caseira.guard';

@Injectable()
export class MedidaCaseiraGuardService implements GenericGuardService {

    constructor(private listar: guard.MedidaCaseiraListarGuard,
                private adicionar: guard.MedidaCaseiraAdicionarGuard,
                private editar: guard.MedidaCaseiraEditarGuard,
                private detalhar: guard.MedidaCaseiraDetalharGuard,
                private remover: guard.MedidaCaseiraRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'MEDIDA-CASEIRA_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'MEDIDA-CASEIRA_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'MEDIDA-CASEIRA_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'MEDIDA-CASEIRA_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'MEDIDA-CASEIRA_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
