import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './requisito-aso.guard';

@Injectable()
export class RequisitoAsoGuardService implements GenericGuardService {

    constructor(private listar: guard.RequisitoAsoListarGuard,
                private adicionar: guard.RequisitoAsoAdicionarGuard,
                private editar: guard.RequisitoAsoEditarGuard,
                private detalhar: guard.RequisitoAsoDetalharGuard,
                private remover: guard.RequisitoAsoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'REQUISITO-ASO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'REQUISITO-ASO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'REQUISITO-ASO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'REQUISITO-ASO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'REQUISITO-ASO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
