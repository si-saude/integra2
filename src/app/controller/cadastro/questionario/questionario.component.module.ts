import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as questionario from './questionario.component';

@NgModule({
    declarations: [
        questionario.QuestionarioListarComponent,
        questionario.QuestionarioAdicionarComponent,
        questionario.QuestionarioEditarComponent,
        questionario.QuestionarioDetalharComponent
    ],
imports: [
    SharedModule
]})
export class QuestionarioComponentModule { }
