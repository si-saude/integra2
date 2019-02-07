import { NgModule } from '@angular/core';

import { IndicadorSastGuardService } from './indicador-sast.guard.service';
import * as indicadorSast from './indicador-sast.guard';

@NgModule({
    providers: [
        indicadorSast.IndicadorSastListarGuard,
        indicadorSast.IndicadorSastAdicionarGuard,
        indicadorSast.IndicadorSastEditarGuard,
        indicadorSast.IndicadorSastDetalharGuard,
        indicadorSast.IndicadorSastRemoverGuard,
        IndicadorSastGuardService
    ]
})
export class IndicadorSastGuardModule { }
