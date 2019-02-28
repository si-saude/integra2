import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './parametro.guard';

@Injectable()
export class ParametroGuardService implements GenericGuardService {

    constructor(private editar: guard.ParametroEditarGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'PARAMETRO_EDITAR': {
                guard = this.editar;
                break;
            }
        }
        return guard;
    }
}
