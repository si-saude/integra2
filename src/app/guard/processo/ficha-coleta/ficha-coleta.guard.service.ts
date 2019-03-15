import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './ficha-coleta.guard';

@Injectable()
export class FichaColetaGuardService implements GenericGuardService {

    constructor(private fichaColeta: guard.FichaColetaGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'FICHA-COLETA_EDITAR': {
                guard = this.fichaColeta;
                break;
            }
        }
        return guard;
    }
}
