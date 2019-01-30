import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as curso from './curso.component';

@NgModule({
    declarations: [
        curso.CursoListarComponent,
        curso.CursoAdicionarComponent,
        curso.CursoEditarComponent,
        curso.CursoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class CursoComponentModule { }
