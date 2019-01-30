import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as cidade from './cidade.component';

@NgModule({
    declarations: [
        cidade.CidadeListarComponent,
        cidade.CidadeAdicionarComponent,
        cidade.CidadeEditarComponent,
        cidade.CidadeDetalharComponent
    ],
imports: [
    SharedModule
]})
export class CidadeComponentModule { }
