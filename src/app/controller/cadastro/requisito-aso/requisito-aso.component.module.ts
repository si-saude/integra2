import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as requisitoAso from './requisito-aso.component';

@NgModule({
    declarations: [
        requisitoAso.RequisitoAsoListarComponent,
        requisitoAso.RequisitoAsoAdicionarComponent,
        requisitoAso.RequisitoAsoEditarComponent,
        requisitoAso.RequisitoAsoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class RequisitoAsoComponentModule { }
