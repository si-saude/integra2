import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as indicadorSast from './indicador-sast.component';

@NgModule({
    declarations: [
        indicadorSast.IndicadorSastListarComponent,
        indicadorSast.IndicadorSastAdicionarComponent,
        indicadorSast.IndicadorSastEditarComponent,
        indicadorSast.IndicadorSastDetalharComponent
    ],
imports: [
    SharedModule
]})
export class IndicadorSastComponentModule { }
