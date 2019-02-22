import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './solicitacao.guard';

@Injectable()
export class SolicitacaoGuardService implements GenericGuardService {

    constructor(private solicitar: guard.SolicitacaoGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'SOLICITACAO_SOLICITAR': {
                guard = this.solicitar;
                break;
            }
        }
        return guard;
    }
}
