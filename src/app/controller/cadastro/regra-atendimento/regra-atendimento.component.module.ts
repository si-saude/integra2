import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as regra from './regra-atendimento.component';

@NgModule({
    declarations: [
        regra.RegraAtendimentoListarComponent,
        regra.RegraAtendimentoAdicionarComponent,
        regra.RegraAtendimentoEditarComponent,
        regra.RegraAtendimentoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class RegraAtendimentoComponentModule { }
