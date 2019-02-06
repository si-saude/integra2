import { NgModule } from '@angular/core';

import { EixoGuardService } from './eixo.guard.service';
import * as eixo from './eixo.guard';

@NgModule({
    providers: [
        eixo.EixoListarGuard,
        eixo.EixoAdicionarGuard,
        eixo.EixoEditarGuard,
        eixo.EixoDetalharGuard,
        eixo.EixoRemoverGuard,
        EixoGuardService
    ]
})
export class EixoGuardModule { }
