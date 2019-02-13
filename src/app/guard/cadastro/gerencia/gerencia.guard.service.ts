import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './gerencia.guard';

@Injectable()
export class GerenciaGuardService implements GenericGuardService {

    constructor(private listar: guard.GerenciaListarGuard,
                private adicionar: guard.GerenciaAdicionarGuard,
                private editar: guard.GerenciaEditarGuard,
                private detalhar: guard.GerenciaDetalharGuard,
                private remover: guard.GerenciaRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'GERENCIA_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'GERENCIA_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'GERENCIA_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'GERENCIA_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'GERENCIA_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
