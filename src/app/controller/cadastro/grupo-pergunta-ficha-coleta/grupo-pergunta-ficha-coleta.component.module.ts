import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as grupo from './grupo-pergunta-ficha-coleta.component';

@NgModule({
    declarations: [
        grupo.GrupoPerguntaFichaColetaListarComponent,
        grupo.GrupoPerguntaFichaColetaAdicionarComponent,
        grupo.GrupoPerguntaFichaColetaEditarComponent,
        grupo.GrupoPerguntaFichaColetaDetalharComponent
    ],
imports: [
    SharedModule
]})
export class GrupoPerguntaFichaColetaComponentModule { }
