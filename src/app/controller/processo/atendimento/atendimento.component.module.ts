import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import { FichaColetaValidator } from './ficha-coleta.validator';
import * as atendimento from './atendimento.component';

@NgModule({
    declarations: [
        atendimento.AtendimentoComponent
    ],
imports: [
    SharedModule
],
providers: [ FichaColetaValidator ]})
export class AtendimentoComponentModule { }
