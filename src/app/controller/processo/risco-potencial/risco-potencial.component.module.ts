import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { SharedModule } from './../../shared.module';
import * as riscoPotencial from './risco-potencial.component';

@NgModule({
    declarations: [
        riscoPotencial.RiscoPotencialComponent
    ],
imports: [
    SharedModule,
    ChartsModule
]})
export class RiscoPotencialComponentModule { }
