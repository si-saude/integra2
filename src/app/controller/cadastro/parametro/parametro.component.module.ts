import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as parametro from './parametro.component';

@NgModule({
    declarations: [
        parametro.ParametroComponent,
    ],
imports: [
    SharedModule
]})
export class ParametroComponentModule { }
