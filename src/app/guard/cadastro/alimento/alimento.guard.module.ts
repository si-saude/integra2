import { NgModule } from '@angular/core';

import { AlimentoGuardService } from './alimento.guard.service';
import * as alimento from './alimento.guard';

@NgModule({
    declarations: [

    ],
    providers: [
        alimento.AlimentoListarGuard,
        alimento.AlimentoAdicionarGuard,
        alimento.AlimentoEditarGuard,
        alimento.AlimentoDetalharGuard,
        alimento.AlimentoRemoverGuard,
        AlimentoGuardService
    ]
})
export class AlimentoGuardModule { }
