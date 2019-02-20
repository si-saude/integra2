import { NgModule } from '@angular/core';

import { LocalizacaoGuardService } from './localizacao.guard.service';
import * as localizacao from './localizacao.guard';

@NgModule({
    providers: [
        localizacao.LocalizacaoListarGuard,
        localizacao.LocalizacaoAdicionarGuard,
        localizacao.LocalizacaoEditarGuard,
        localizacao.LocalizacaoDetalharGuard,
        localizacao.LocalizacaoRemoverGuard,
        LocalizacaoGuardService
    ]
})
export class LocalizacaoGuardModule { }
