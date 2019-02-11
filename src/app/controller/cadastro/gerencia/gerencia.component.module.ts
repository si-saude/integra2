import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as gerencia from './gerencia.component';

@NgModule({
    declarations: [
        gerencia.GerenciaListarComponent,
        gerencia.GerenciaAdicionarComponent,
        gerencia.GerenciaEditarComponent,
        gerencia.GerenciaDetalharComponent
    ],
imports: [
    SharedModule
]})
export class GerenciaComponentModule { }
