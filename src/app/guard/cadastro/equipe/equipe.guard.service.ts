import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './equipe.guard';

@Injectable()
export class EquipeGuardService implements GenericGuardService {

    constructor(private listar: guard.EquipeListarGuard,
                private adicionar: guard.EquipeAdicionarGuard,
                private editar: guard.EquipeEditarGuard,
                private detalhar: guard.EquipeDetalharGuard,
                private remover: guard.EquipeRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'EQUIPE_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'EQUIPE_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'EQUIPE_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'EQUIPE_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'EQUIPE_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
