import { NgModule } from '@angular/core';

import { PerguntaFichaColetaGuardService } from './pergunta-ficha-coleta.guard.service';
import * as pergunta from './pergunta-ficha-coleta.guard';

@NgModule({
    providers: [
        pergunta.PerguntaFichaColetaListarGuard,
        pergunta.PerguntaFichaColetaAdicionarGuard,
        pergunta.PerguntaFichaColetaEditarGuard,
        pergunta.PerguntaFichaColetaDetalharGuard,
        pergunta.PerguntaFichaColetaRemoverGuard,
        PerguntaFichaColetaGuardService
    ]
})
export class PerguntaFichaColetaGuardModule { }
