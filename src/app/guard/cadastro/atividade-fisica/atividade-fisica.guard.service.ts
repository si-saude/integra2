import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './atividade-fisica.guard';

@Injectable()
export class AtividadeFisicaGuardService implements GenericGuardService {

    constructor(private listar: guard.AtividadeFisicaListarGuard,
                private adicionar: guard.AtividadeFisicaAdicionarGuard,
                private editar: guard.AtividadeFisicaEditarGuard,
                private detalhar: guard.AtividadeFisicaDetalharGuard,
                private remover: guard.AtividadeFisicaRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'ATIVIDADE-FISICA_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'ATIVIDADE-FISICA_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'ATIVIDADE-FISICA_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'ATIVIDADE-FISICA_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'ATIVIDADE-FISICA_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
