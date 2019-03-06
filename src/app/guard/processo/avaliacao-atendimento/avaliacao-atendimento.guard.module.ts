import { NgModule } from '@angular/core';

import { AvaliacaoAtendimentoGuardService } from './avaliacao-atendimento.guard.service';
import * as avaliacaoAtendimento from './avaliacao-atendimento.guard';

@NgModule({
    providers: [
        avaliacaoAtendimento.AvaliacaoAtendimentoGuard,
        AvaliacaoAtendimentoGuardService
    ]
})
export class AvaliacaoAtendimentoGuardModule { }
