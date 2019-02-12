import { NgModule } from '@angular/core';

import { RegraAtendimentoGuardService } from './regra-atendimento.guard.service';
import * as regra from './regra-atendimento.guard';

@NgModule({
    providers: [
        regra.RegraAtendimentoListarGuard,
        regra.RegraAtendimentoAdicionarGuard,
        regra.RegraAtendimentoEditarGuard,
        regra.RegraAtendimentoDetalharGuard,
        regra.RegraAtendimentoRemoverGuard,
        RegraAtendimentoGuardService
    ]
})
export class RegraAtendimentoGuardModule { }
