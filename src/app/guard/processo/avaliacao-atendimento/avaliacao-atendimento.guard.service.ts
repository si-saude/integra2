import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './avaliacao-atendimento.guard';

@Injectable()
export class AvaliacaoAtendimentoGuardService implements GenericGuardService {

    constructor(private avaliacaoAtendimento: guard.AvaliacaoAtendimentoGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'AVALIACAO-ATENDIMENTO_RESPONDER': {
                guard = this.avaliacaoAtendimento;
                break;
            }
        }
        return guard;
    }
}
