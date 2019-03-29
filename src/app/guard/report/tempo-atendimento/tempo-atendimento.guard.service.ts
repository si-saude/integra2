import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './tempo-atendimento.guard';

@Injectable()
export class TempoAtendimentoGuardService implements GenericGuardService {

    constructor(private tempoAtendimento: guard.TempoAtendimentoGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'REPORT_TEMPO-ATENDIMENTO': {
                guard = this.tempoAtendimento;
                break;
            }
        }
        return guard;
    }
}
