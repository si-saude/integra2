import { NgModule } from '@angular/core';

import { SharedModule } from './../../../shared.module';
import * as atendimentoOcupacional from './atendimento-ocupacional.component';

@NgModule({
    declarations: [
        atendimentoOcupacional.AtendimentoOcupacionalComponent
    ],
imports: [
    SharedModule
]})
export class AtendimentoOcupacionalComponentModule { }
