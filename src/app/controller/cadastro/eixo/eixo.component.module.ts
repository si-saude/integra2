import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as eixo from './eixo.component';

@NgModule({
    declarations: [
        eixo.EixoListarComponent,
        eixo.EixoAdicionarComponent,
        eixo.EixoEditarComponent,
        eixo.EixoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class EixoComponentModule { }
