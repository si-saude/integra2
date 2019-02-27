import { GenericGuard } from './../generic/generic-guard';
import { Injectable } from '@angular/core';

import { Helper } from './../generic/helper';
import { GenericGuardService } from './../generic/generic-guard.service';

import { AtendimentoGuardService } from './processo/atendimento/atendimento.guard.service';
import { CheckinGuardService } from './processo/checkin/checkin.guard.service';
import { SolicitacaoGuardService } from './processo/solicitacao/solicitacao.guard.service';

@Injectable()
export class ProcessoGuardService implements GenericGuardService {

    private helper: Helper;

    constructor(
        private atendimento: AtendimentoGuardService,
        private checkin: CheckinGuardService,
        private solicitacao: SolicitacaoGuardService) {

            this.helper = new Helper();
    }

    hasPermission(funcionalidade: string): GenericGuard {
        let guardService: GenericGuardService;
        const grupo = this.helper.ignoreLastStringArrayItem(funcionalidade, '_');
        switch (grupo) {
            case 'ATENDIMENTO': {
                guardService = this.atendimento;
                break;
            }
            case 'CHECKIN': {
                guardService = this.checkin;
                break;
            }
            case 'SOLICITACAO': {
                guardService = this.solicitacao;
                break;
            }
        }
        return guardService.hasPermission(funcionalidade);
    }
}
