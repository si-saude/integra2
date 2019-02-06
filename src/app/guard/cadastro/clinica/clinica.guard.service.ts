import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './clinica.guard';

@Injectable()
export class ClinicaGuardService implements GenericGuardService {

    constructor(private listar: guard.ClinicaListarGuard,
                private adicionar: guard.ClinicaAdicionarGuard,
                private editar: guard.ClinicaEditarGuard,
                private detalhar: guard.ClinicaDetalharGuard,
                private remover: guard.ClinicaRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'CLINICA_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'CLINICA_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'CLINICA_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'CLINICA_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'CLINICA_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
