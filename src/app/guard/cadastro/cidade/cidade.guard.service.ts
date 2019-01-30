import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './cidade.guard';

@Injectable()
export class CidadeGuardService implements GenericGuardService {

    constructor(private listar: guard.CidadeListarGuard,
                private adicionar: guard.CidadeAdicionarGuard,
                private editar: guard.CidadeEditarGuard,
                private detalhar: guard.CidadeDetalharGuard,
                private remover: guard.CidadeRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'CIDADE_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'CIDADE_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'CIDADE_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'CIDADE_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'CIDADE_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
