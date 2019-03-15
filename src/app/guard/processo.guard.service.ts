import { GenericGuard } from './../generic/generic-guard';
import { Injectable } from '@angular/core';

import { Helper } from './../generic/helper';
import { GenericGuardService } from './../generic/generic-guard.service';

import { AtendimentoGuardService } from './processo/atendimento/atendimento.guard.service';
import { AvaliacaoAtendimentoGuardService } from './processo/avaliacao-atendimento/avaliacao-atendimento.guard.service';
import { CheckinGuardService } from './processo/checkin/checkin.guard.service';
import { FichaColetaGuardService } from './processo/ficha-coleta/ficha-coleta.guard.service';
import { RiscoPotencialGuardService } from './processo/risco-potencial/risco-potencial.guard.service';
import { SolicitacaoGuardService } from './processo/solicitacao/solicitacao.guard.service';

@Injectable()
export class ProcessoGuardService implements GenericGuardService {

    private helper: Helper;

    constructor(
        private atendimento: AtendimentoGuardService,
        private avaliacaoAtendimento: AvaliacaoAtendimentoGuardService,
        private checkin: CheckinGuardService,
        private fichaColeta: FichaColetaGuardService,
        private riscoPotencial: RiscoPotencialGuardService,
        private solicitacao: SolicitacaoGuardService
        ) {

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
            case 'AVALIACAO-ATENDIMENTO': {
                guardService = this.avaliacaoAtendimento;
                break;
            }
            case 'CHECKIN': {
                guardService = this.checkin;
                break;
            }
            case 'FICHA-COLETA': {
                guardService = this.fichaColeta;
                break;
            }
            case 'RISCO-POTENCIAL': {
                guardService = this.riscoPotencial;
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
