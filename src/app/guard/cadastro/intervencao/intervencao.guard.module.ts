import { NgModule } from '@angular/core';

import { IntervencaoGuardService } from './intervencao.guard.service';
import * as intervencao from './intervencao.guard';

@NgModule({
    providers: [
        intervencao.IntervencaoListarGuard,
        intervencao.IntervencaoAdicionarGuard,
        intervencao.IntervencaoEditarGuard,
        intervencao.IntervencaoDetalharGuard,
        intervencao.IntervencaoRemoverGuard,
        IntervencaoGuardService
    ]
})
export class IntervencaoGuardModule { }
