import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as imovel from './imovel.component';

@NgModule({
    declarations: [
        imovel.ImovelListarComponent,
        imovel.ImovelAdicionarComponent,
        imovel.ImovelEditarComponent,
        imovel.ImovelDetalharComponent
    ],
imports: [
    SharedModule
]})
export class ImovelComponentModule { }
