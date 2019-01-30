import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import { CampoExameValidator } from './campo-exame.validator';
import * as exame from './exame.component';

@NgModule({
    declarations: [
        exame.ExameListarComponent,
        exame.ExameAdicionarComponent,
        exame.ExameEditarComponent,
        exame.ExameDetalharComponent
    ],
imports: [
    SharedModule
],
providers: [
    CampoExameValidator
]})
export class ExameComponentModule { }
