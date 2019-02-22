import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './profissional.guard';

@Injectable()
export class ProfissionalGuardService implements GenericGuardService {

    constructor(private listar: guard.ProfissionalListarGuard,
                private adicionar: guard.ProfissionalAdicionarGuard,
                private editar: guard.ProfissionalEditarGuard,
                private detalhar: guard.ProfissionalDetalharGuard,
                private remover: guard.ProfissionalRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'PROFISSIONAL_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'PROFISSIONAL_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'PROFISSIONAL_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'PROFISSIONAL_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'PROFISSIONAL_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
