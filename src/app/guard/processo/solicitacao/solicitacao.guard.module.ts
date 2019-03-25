import { NgModule } from '@angular/core';

import { SolicitacaoGuardService } from './solicitacao.guard.service';
import * as solicitacao from './solicitacao.guard';

@NgModule({
    providers: [
        solicitacao.CancelarSolicitacaoGuard,
        solicitacao.SolicitacaoGuard,
        SolicitacaoGuardService
    ]
})
export class SolicitacaoGuardModule { }
