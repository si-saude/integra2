import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as perguntaFichaColeta from './pergunta-ficha-coleta.component';

@NgModule({
    declarations: [
        perguntaFichaColeta.PerguntaFichaColetaListarComponent,
        perguntaFichaColeta.PerguntaFichaColetaAdicionarComponent,
        perguntaFichaColeta.PerguntaFichaColetaEditarComponent,
        perguntaFichaColeta.PerguntaFichaColetaDetalharComponent
    ],
imports: [
    SharedModule
]})
export class PerguntaFichaColetaComponentModule { }
