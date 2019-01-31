import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as base from './base.component';

@NgModule({
    declarations: [
        base.BaseListarComponent,
        base.BaseAdicionarComponent,
        base.BaseEditarComponent,
        base.BaseDetalharComponent
    ],
imports: [
    SharedModule
]})
export class BaseComponentModule { }
