import { NgModule } from '@angular/core';

import { SharedModule } from './../../../shared.module';
import * as cancelar from './cancelar.component';

@NgModule({
    declarations: [
        cancelar.CancelarComponent
    ],
imports: [
    SharedModule
]})
export class CancelarComponentModule { }
