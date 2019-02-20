import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as empregado from './empregado.component';

@NgModule({
    declarations: [
        empregado.EmpregadoListarComponent,
        empregado.EmpregadoAdicionarComponent,
        empregado.EmpregadoEditarComponent,
        empregado.EmpregadoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class EmpregadoComponentModule { }
