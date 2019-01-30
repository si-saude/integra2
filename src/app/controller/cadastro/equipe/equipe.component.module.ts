import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as equipe from './equipe.component';

@NgModule({
    declarations: [
        equipe.EquipeListarComponent,
        equipe.EquipeAdicionarComponent,
        equipe.EquipeEditarComponent,
        equipe.EquipeDetalharComponent
    ],
imports: [
    SharedModule
]})
export class EquipeComponentModule { }
