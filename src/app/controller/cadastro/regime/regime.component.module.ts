import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as regime from './regime.component';

@NgModule({
    declarations: [
        regime.RegimeListarComponent,
        regime.RegimeAdicionarComponent,
        regime.RegimeEditarComponent,
        regime.RegimeDetalharComponent
    ],
imports: [
    SharedModule
]})
export class RegimeComponentModule { }
