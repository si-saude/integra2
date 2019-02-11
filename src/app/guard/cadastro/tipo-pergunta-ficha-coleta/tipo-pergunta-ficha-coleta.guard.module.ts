import { NgModule } from '@angular/core';

import { TipoPerguntaFichaColetaGuardService } from './tipo-pergunta-ficha-coleta.guard.service';
import * as tipo from './tipo-pergunta-ficha-coleta.guard';

@NgModule({
    providers: [
        tipo.TipoPerguntaFichaColetaListarGuard,
        tipo.TipoPerguntaFichaColetaAdicionarGuard,
        tipo.TipoPerguntaFichaColetaEditarGuard,
        tipo.TipoPerguntaFichaColetaDetalharGuard,
        tipo.TipoPerguntaFichaColetaRemoverGuard,
        TipoPerguntaFichaColetaGuardService
    ]
})
export class TipoPerguntaFichaColetaGuardModule { }
