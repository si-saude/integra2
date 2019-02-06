import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as diagnostico from './diagnostico.component';

@NgModule({
    declarations: [
        diagnostico.DiagnosticoListarComponent,
        diagnostico.DiagnosticoAdicionarComponent,
        diagnostico.DiagnosticoEditarComponent,
        diagnostico.DiagnosticoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class DiagnosticoComponentModule { }
