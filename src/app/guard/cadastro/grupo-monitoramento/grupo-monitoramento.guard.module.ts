import { NgModule } from '@angular/core';

import { GrupoMonitoramentoGuardService } from './grupo-monitoramento.guard.service';
import * as grupoMonitoramento from './grupo-monitoramento.guard';

@NgModule({
    providers: [
        grupoMonitoramento.GrupoMonitoramentoListarGuard,
        grupoMonitoramento.GrupoMonitoramentoAdicionarGuard,
        grupoMonitoramento.GrupoMonitoramentoEditarGuard,
        grupoMonitoramento.GrupoMonitoramentoDetalharGuard,
        grupoMonitoramento.GrupoMonitoramentoRemoverGuard,
        GrupoMonitoramentoGuardService
    ]
})
export class GrupoMonitoramentoGuardModule { }
