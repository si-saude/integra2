import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as ghe from './ghe.component';

@NgModule({
    declarations: [
        ghe.GheListarComponent,
        ghe.GheAdicionarComponent,
        ghe.GheEditarComponent,
        ghe.GheDetalharComponent
    ],
imports: [
    SharedModule
]})
export class GheComponentModule { }
