import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './indicador-sast.guard';

@Injectable()
export class IndicadorSastGuardService implements GenericGuardService {

    constructor(private listar: guard.IndicadorSastListarGuard,
                private adicionar: guard.IndicadorSastAdicionarGuard,
                private editar: guard.IndicadorSastEditarGuard,
                private detalhar: guard.IndicadorSastDetalharGuard,
                private remover: guard.IndicadorSastRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'INDICADOR-SAST_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'INDICADOR-SAST_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'INDICADOR-SAST_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'INDICADOR-SAST_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'INDICADOR-SAST_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
