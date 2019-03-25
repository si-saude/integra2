import { NgModule } from '@angular/core';

import { SharedModule } from './../../../../shared.module';
import * as cancelarAtendimentoOcupacional from './cancelar-atendimento-ocupacional.component';

@NgModule({
    declarations: [
        cancelarAtendimentoOcupacional.CancelarAtendimentoOcupacionalComponent
    ],
imports: [
    SharedModule
]})
export class CancelarAtendimentoOcupacionalComponentModule { }
