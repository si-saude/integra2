import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './profissiograma.guard';

@Injectable()
export class ProfissiogramaGuardService implements GenericGuardService {

    constructor(private listar: guard.ProfissiogramaListarGuard,
                private adicionar: guard.ProfissiogramaAdicionarGuard,
                private editar: guard.ProfissiogramaEditarGuard,
                private detalhar: guard.ProfissiogramaDetalharGuard,
                private remover: guard.ProfissiogramaRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'PROFISSIOGRAMA_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'PROFISSIOGRAMA_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'PROFISSIOGRAMA_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'PROFISSIOGRAMA_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'PROFISSIOGRAMA_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
