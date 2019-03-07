import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './risco-potencial.guard';

@Injectable()
export class RiscoPotencialGuardService implements GenericGuardService {

    constructor(private riscoPotencial: guard.RiscoPotencialGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'RISCO-POTENCIAL_LISTAR': {
                guard = this.riscoPotencial;
                break;
            }
        }
        return guard;
    }
}
