import { NgModule } from '@angular/core';

import { GrupoPerguntaFichaColetaGuardService } from './grupo-pergunta-ficha-coleta.guard.service';
import * as grupo from './grupo-pergunta-ficha-coleta.guard';

@NgModule({
    providers: [
        grupo.GrupoPerguntaFichaColetaListarGuard,
        grupo.GrupoPerguntaFichaColetaAdicionarGuard,
        grupo.GrupoPerguntaFichaColetaEditarGuard,
        grupo.GrupoPerguntaFichaColetaDetalharGuard,
        grupo.GrupoPerguntaFichaColetaRemoverGuard,
        GrupoPerguntaFichaColetaGuardService
    ]
})
export class GrupoPerguntaFichaColetaGuardModule { }
