import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as solicitacao from './solicitacao.component';

@NgModule({
    declarations: [
        solicitacao.SolicitacaoComponent
    ],
imports: [
    SharedModule
]})
export class SolicitacaoComponentModule { }
