import { GenericGuard } from './../generic/generic-guard';
import { Injectable } from '@angular/core';

import { Helper } from './../generic/helper';
import { GenericGuardService } from './../generic/generic-guard.service';

import { SolicitacaoGuardService } from './processo/solicitacao/solicitacao.guard.service';

@Injectable()
export class ProcessoGuardService implements GenericGuardService {

    private helper: Helper;

    constructor(private solicitacao: SolicitacaoGuardService) {

            this.helper = new Helper();
    }

    hasPermission(funcionalidade: string): GenericGuard {
        let guardService: GenericGuardService;
        const grupo = this.helper.ignoreLastStringArrayItem(funcionalidade, '_');
        switch (grupo) {
            case 'SOLICITACAO': {
                guardService = this.solicitacao;
                break;
            }
        }
        return guardService.hasPermission(funcionalidade);
    }
}
