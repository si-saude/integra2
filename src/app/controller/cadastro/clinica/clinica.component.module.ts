import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as clinica from './clinica.component';

@NgModule({
    declarations: [
        clinica.ClinicaListarComponent,
        clinica.ClinicaAdicionarComponent,
        clinica.ClinicaEditarComponent,
        clinica.ClinicaDetalharComponent
    ],
imports: [
    SharedModule
]})
export class ClinicaComponentModule { }
