import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as riscoGhe from './risco-ghe.component';

@NgModule({
    declarations: [
        riscoGhe.RiscoGheListarComponent,
        riscoGhe.RiscoGheAdicionarComponent,
        riscoGhe.RiscoGheEditarComponent,
        riscoGhe.RiscoGheDetalharComponent
    ],
imports: [
    SharedModule
]})
export class RiscoGheComponentModule { }
