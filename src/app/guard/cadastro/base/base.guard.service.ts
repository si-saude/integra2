import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './base.guard';

@Injectable()
export class BaseGuardService implements GenericGuardService {

    constructor(private listar: guard.BaseListarGuard,
                private adicionar: guard.BaseAdicionarGuard,
                private editar: guard.BaseEditarGuard,
                private detalhar: guard.BaseDetalharGuard,
                private remover: guard.BaseRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'BASE_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'BASE_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'BASE_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'BASE_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'BASE_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
