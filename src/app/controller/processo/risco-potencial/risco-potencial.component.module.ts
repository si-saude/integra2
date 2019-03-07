import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as riscoPotencial from './risco-potencial.component';

@NgModule({
    declarations: [
        riscoPotencial.RiscoPotencialComponent
    ],
imports: [
    SharedModule
]})
export class RiscoPotencialComponentModule { }
