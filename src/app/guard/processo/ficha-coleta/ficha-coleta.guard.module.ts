import { NgModule } from '@angular/core';

import { FichaColetaGuardService } from './ficha-coleta.guard.service';
import * as fichaColeta from './ficha-coleta.guard';

@NgModule({
    providers: [
        fichaColeta.FichaColetaGuard,
        FichaColetaGuardService
    ]
})
export class FichaColetaGuardModule { }
