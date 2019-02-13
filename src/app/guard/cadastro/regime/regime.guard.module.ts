import { NgModule } from '@angular/core';

import { RegimeGuardService } from './regime.guard.service';
import * as regime from './regime.guard';

@NgModule({
    providers: [
        regime.RegimeListarGuard,
        regime.RegimeAdicionarGuard,
        regime.RegimeEditarGuard,
        regime.RegimeDetalharGuard,
        regime.RegimeRemoverGuard,
        RegimeGuardService
    ]
})
export class RegimeGuardModule { }
