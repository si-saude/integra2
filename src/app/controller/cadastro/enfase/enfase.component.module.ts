import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as enfase from './enfase.component';

@NgModule({
    declarations: [
        enfase.EnfaseListarComponent,
        enfase.EnfaseAdicionarComponent,
        enfase.EnfaseEditarComponent,
        enfase.EnfaseDetalharComponent
    ],
imports: [
    SharedModule
]})
export class EnfaseComponentModule { }
