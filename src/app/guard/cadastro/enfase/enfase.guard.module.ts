import { NgModule } from '@angular/core';

import { EnfaseGuardService } from './enfase.guard.service';
import * as enfase from './enfase.guard';

@NgModule({
    providers: [
        enfase.EnfaseListarGuard,
        enfase.EnfaseAdicionarGuard,
        enfase.EnfaseEditarGuard,
        enfase.EnfaseDetalharGuard,
        enfase.EnfaseRemoverGuard,
        EnfaseGuardService
    ]
})
export class EnfaseGuardModule { }
