import { NgModule } from '@angular/core';

import { TempoAtendimentoGuardService } from './tempo-atendimento.guard.service';
import * as tempoAtendimento from './tempo-atendimento.guard';

@NgModule({
    providers: [
        tempoAtendimento.TempoAtendimentoGuard,
        TempoAtendimentoGuardService
    ]
})
export class TempoAtendimentoGuardModule { }
