import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as criterio from './criterio.component';

@NgModule({
    declarations: [
        criterio.CriterioListarComponent,
        criterio.CriterioAdicionarComponent,
        criterio.CriterioEditarComponent,
        criterio.CriterioDetalharComponent
    ],
imports: [
    SharedModule
]})
export class CriterioComponentModule { }
