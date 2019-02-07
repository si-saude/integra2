import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as intervencao from './intervencao.component';

@NgModule({
    declarations: [
        intervencao.IntervencaoListarComponent,
        intervencao.IntervencaoAdicionarComponent,
        intervencao.IntervencaoEditarComponent,
        intervencao.IntervencaoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class IntervencaoComponentModule { }
