import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './funcao.guard';

@Injectable()
export class FuncaoGuardService implements GenericGuardService {

    constructor(private listar: guard.FuncaoListarGuard,
                private adicionar: guard.FuncaoAdicionarGuard,
                private editar: guard.FuncaoEditarGuard,
                private detalhar: guard.FuncaoDetalharGuard,
                private remover: guard.FuncaoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'FUNCAO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'FUNCAO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'FUNCAO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'FUNCAO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'FUNCAO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
