import { NgModule } from '@angular/core';

import { ClinicaGuardService } from './clinica.guard.service';
import * as clinica from './clinica.guard';

@NgModule({
    providers: [
        clinica.ClinicaListarGuard,
        clinica.ClinicaAdicionarGuard,
        clinica.ClinicaEditarGuard,
        clinica.ClinicaDetalharGuard,
        clinica.ClinicaRemoverGuard,
        ClinicaGuardService
    ]
})
export class ClinicaGuardModule { }
