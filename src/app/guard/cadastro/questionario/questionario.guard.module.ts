import { NgModule } from '@angular/core';

import { QuestionarioGuardService } from './questionario.guard.service';
import * as questionario from './questionario.guard';

@NgModule({
    providers: [
        questionario.QuestionarioListarGuard,
        questionario.QuestionarioAdicionarGuard,
        questionario.QuestionarioEditarGuard,
        questionario.QuestionarioDetalharGuard,
        questionario.QuestionarioRemoverGuard,
        QuestionarioGuardService
    ]
})
export class QuestionarioGuardModule { }
