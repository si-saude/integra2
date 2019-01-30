import { NgModule } from '@angular/core';

import { CriterioGuardService } from './criterio.guard.service';
import * as criterio from './criterio.guard';

@NgModule({
    providers: [
        criterio.CriterioListarGuard,
        criterio.CriterioAdicionarGuard,
        criterio.CriterioEditarGuard,
        criterio.CriterioDetalharGuard,
        criterio.CriterioRemoverGuard,
        CriterioGuardService
    ]
})
export class CriterioGuardModule { }
