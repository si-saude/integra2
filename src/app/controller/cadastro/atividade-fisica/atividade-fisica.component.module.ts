import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as atividadeFisica from './atividade-fisica.component';

@NgModule({
    declarations: [
        atividadeFisica.AtividadeFisicaListarComponent,
        atividadeFisica.AtividadeFisicaAdicionarComponent,
        atividadeFisica.AtividadeFisicaEditarComponent,
        atividadeFisica.AtividadeFisicaDetalharComponent
    ],
imports: [
    SharedModule
]})
export class AtividadeFisicaComponentModule { }
