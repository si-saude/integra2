import { NgModule } from '@angular/core';

import { AtendimentoGuardService } from './atendimento.guard.service';
import * as atendimento from './atendimento.guard';

@NgModule({
    providers: [
        atendimento.AtendimentoGuard,
        atendimento.AtendimentoFilaGuard,
        AtendimentoGuardService
    ]
})
export class AtendimentoGuardModule { }
