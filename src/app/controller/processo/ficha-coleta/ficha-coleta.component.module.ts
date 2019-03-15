import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as fichaColeta from './ficha-coleta.component';

@NgModule({
    declarations: [
        fichaColeta.FichaColetaComponent
    ],
imports: [
    SharedModule
]})
export class FichaColetaComponentModule { }
