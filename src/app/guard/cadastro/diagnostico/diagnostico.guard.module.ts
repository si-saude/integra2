import { NgModule } from '@angular/core';

import { DiagnosticoGuardService } from './diagnostico.guard.service';
import * as diagnostico from './diagnostico.guard';

@NgModule({
    providers: [
        diagnostico.DiagnosticoListarGuard,
        diagnostico.DiagnosticoAdicionarGuard,
        diagnostico.DiagnosticoEditarGuard,
        diagnostico.DiagnosticoDetalharGuard,
        diagnostico.DiagnosticoRemoverGuard,
        DiagnosticoGuardService
    ]
})
export class DiagnosticoGuardModule { }
