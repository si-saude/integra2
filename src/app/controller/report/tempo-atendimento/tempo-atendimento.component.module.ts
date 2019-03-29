import { NgModule } from '@angular/core';



import { SharedModule } from './../../shared.module';
import * as tempoAtendimento from './tempo-atendimento.component';

@NgModule({
    declarations: [
        tempoAtendimento.TempoAtendimentoComponent
    ],
imports: [
    SharedModule
]})
export class TempoAtendimentoComponentModule { }
