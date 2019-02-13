import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as alimento from './alimento.component';

@NgModule({
    declarations: [
        alimento.AlimentoListarComponent,
        alimento.AlimentoAdicionarComponent,
        alimento.AlimentoEditarComponent,
        alimento.AlimentoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class AlimentoComponentModule { }
