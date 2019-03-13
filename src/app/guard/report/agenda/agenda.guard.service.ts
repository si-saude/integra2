import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './agenda.guard';

@Injectable()
export class AgendaGuardService implements GenericGuardService {

    constructor(private agenda: guard.AgendaGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'REPORT_AGENDA': {
                guard = this.agenda;
                break;
            }
        }
        return guard;
    }
}
