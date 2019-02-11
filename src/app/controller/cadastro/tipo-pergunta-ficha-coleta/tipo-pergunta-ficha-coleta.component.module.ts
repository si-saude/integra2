import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as tipo from './tipo-pergunta-ficha-coleta.component';

@NgModule({
    declarations: [
        tipo.TipoPerguntaFichaColetaListarComponent,
        tipo.TipoPerguntaFichaColetaAdicionarComponent,
        tipo.TipoPerguntaFichaColetaEditarComponent,
        tipo.TipoPerguntaFichaColetaDetalharComponent
    ],
imports: [
    SharedModule
]})
export class TipoPerguntaFichaColetaComponentModule { }
