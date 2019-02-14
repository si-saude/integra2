import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as grupoMonitoramento from './grupo-monitoramento.component';

@NgModule({
    declarations: [
        grupoMonitoramento.GrupoMonitoramentoListarComponent,
        grupoMonitoramento.GrupoMonitoramentoAdicionarComponent,
        grupoMonitoramento.GrupoMonitoramentoEditarComponent,
        grupoMonitoramento.GrupoMonitoramentoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class GrupoMonitoramentoComponentModule { }
