import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './intervencao.guard';

@Injectable()
export class IntervencaoGuardService implements GenericGuardService {

    constructor(private listar: guard.IntervencaoListarGuard,
                private adicionar: guard.IntervencaoAdicionarGuard,
                private editar: guard.IntervencaoEditarGuard,
                private detalhar: guard.IntervencaoDetalharGuard,
                private remover: guard.IntervencaoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'INTERVENCAO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'INTERVENCAO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'INTERVENCAO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'INTERVENCAO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'INTERVENCAO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
