import { NgModule } from '@angular/core';

import { CidadeGuardService } from './cidade.guard.service';
import * as cidade from './cidade.guard';

@NgModule({
    providers: [
        cidade.CidadeListarGuard,
        cidade.CidadeAdicionarGuard,
        cidade.CidadeEditarGuard,
        cidade.CidadeDetalharGuard,
        cidade.CidadeRemoverGuard,
        CidadeGuardService
    ]
})
export class CidadeGuardModule { }
