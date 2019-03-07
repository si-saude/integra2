import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './atendimento.guard';

@Injectable()
export class AtendimentoGuardService implements GenericGuardService {

    constructor(private atendimento: guard.AtendimentoGuard,
        private fila: guard.AtendimentoFilaGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'ATENDIMENTO_ATENDIMENTO': {
                guard = this.atendimento;
                break;
            }
            case 'ATENDIMENTO_FILA': {
                guard = this.fila;
                break;
            }
        }
        return guard;
    }
}
