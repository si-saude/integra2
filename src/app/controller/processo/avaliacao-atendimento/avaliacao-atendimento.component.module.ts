import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as avaliacao from './avaliacao-atendimento.component';

@NgModule({
    declarations: [
        avaliacao.AvaliacaoAtendimentoComponent
    ],
imports: [
    SharedModule
]})
export class AvaliacaoAtendimentoComponentModule { }
