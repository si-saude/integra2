import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as funcao from './funcao.component';

@NgModule({
    declarations: [
        funcao.FuncaoListarComponent,
        funcao.FuncaoAdicionarComponent,
        funcao.FuncaoEditarComponent,
        funcao.FuncaoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class FuncaoComponentModule { }
