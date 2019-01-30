import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './cargo.guard';

@Injectable()
export class CargoGuardService implements GenericGuardService {

    constructor(private listar: guard.CargoListarGuard,
                private adicionar: guard.CargoAdicionarGuard,
                private editar: guard.CargoEditarGuard,
                private detalhar: guard.CargoDetalharGuard,
                private remover: guard.CargoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'CARGO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'CARGO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'CARGO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'CARGO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'CARGO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
