import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as atendimento from './atendimento.component';

@NgModule({
    declarations: [
        atendimento.AtendimentoComponent
    ],
imports: [
    SharedModule
]})
export class AtendimentoComponentModule { }
