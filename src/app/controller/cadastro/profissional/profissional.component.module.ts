import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as profissional from './profissional.component';

@NgModule({
    declarations: [
        profissional.ProfissionalListarComponent,
        profissional.ProfissionalAdicionarComponent,
        profissional.ProfissionalEditarComponent,
        profissional.ProfissionalDetalharComponent
    ],
imports: [
    SharedModule
]})
export class ProfissionalComponentModule { }
