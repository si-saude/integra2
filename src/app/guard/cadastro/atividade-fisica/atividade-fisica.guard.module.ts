import { NgModule } from '@angular/core';

import { AtividadeFisicaGuardService } from './atividade-fisica.guard.service';
import * as atividadeFisica from './atividade-fisica.guard';

@NgModule({
    providers: [
        atividadeFisica.AtividadeFisicaListarGuard,
        atividadeFisica.AtividadeFisicaAdicionarGuard,
        atividadeFisica.AtividadeFisicaEditarGuard,
        atividadeFisica.AtividadeFisicaDetalharGuard,
        atividadeFisica.AtividadeFisicaRemoverGuard,
        AtividadeFisicaGuardService
    ]
})
export class AtividadeFisicaGuardModule { }
