import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './diagnostico.guard';

@Injectable()
export class DiagnosticoGuardService implements GenericGuardService {

    constructor(private listar: guard.DiagnosticoListarGuard,
                private adicionar: guard.DiagnosticoAdicionarGuard,
                private editar: guard.DiagnosticoEditarGuard,
                private detalhar: guard.DiagnosticoDetalharGuard,
                private remover: guard.DiagnosticoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'DIAGNOSTICO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'DIAGNOSTICO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'DIAGNOSTICO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'DIAGNOSTICO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'DIAGNOSTICO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
