import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as localizacao from './localizacao.component';

@NgModule({
    declarations: [
        localizacao.LocalizacaoListarComponent,
        localizacao.LocalizacaoAdicionarComponent,
        localizacao.LocalizacaoEditarComponent,
        localizacao.LocalizacaoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class LocalizacaoComponentModule { }
