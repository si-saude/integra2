import { GenericGuard } from './../generic/generic-guard';
import { Injectable } from '@angular/core';

import { Helper } from './../generic/helper';
import { GenericGuardService } from './../generic/generic-guard.service';

import { AgendaGuardService } from './report/agenda/agenda.guard.service';
import { TempoAtendimentoGuardService } from './report/tempo-atendimento/tempo-atendimento.guard.service';


@Injectable()
export class ReportGuardService implements GenericGuardService {

    private helper: Helper;

    constructor(
        private agenda: AgendaGuardService, private tempoAtendimento: TempoAtendimentoGuardService
        ) {

            this.helper = new Helper();
    }

    hasPermission(funcionalidade: string): GenericGuard {
        let guardService: GenericGuardService;
        const f = funcionalidade.split('_')[1];
        switch (f) {
            case 'AGENDA': {
                guardService = this.agenda;
                break;
            }
            case 'TEMPO-ATENDIMENTO': {
                guardService = this.tempoAtendimento;
                break;
            }
        }
        return guardService ? guardService.hasPermission(funcionalidade) : undefined;
    }
}
