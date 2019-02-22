import { NgModule } from '@angular/core';

import { ProfissionalGuardService } from './profissional.guard.service';
import * as profissional from './profissional.guard';

@NgModule({
    providers: [
        profissional.ProfissionalListarGuard,
        profissional.ProfissionalAdicionarGuard,
        profissional.ProfissionalEditarGuard,
        profissional.ProfissionalDetalharGuard,
        profissional.ProfissionalRemoverGuard,
        ProfissionalGuardService
    ]
})
export class ProfissionalGuardModule { }
