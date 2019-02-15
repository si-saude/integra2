import { NgModule } from '@angular/core';

import { TipoGrupoMonitoramentoGuardService } from './tipo-grupo-monitoramento.guard.service';
import * as tipoGrupoMonitoramento from './tipo-grupo-monitoramento.guard';

@NgModule({
    providers: [
        tipoGrupoMonitoramento.TipoGrupoMonitoramentoListarGuard,
        tipoGrupoMonitoramento.TipoGrupoMonitoramentoAdicionarGuard,
        tipoGrupoMonitoramento.TipoGrupoMonitoramentoEditarGuard,
        tipoGrupoMonitoramento.TipoGrupoMonitoramentoDetalharGuard,
        tipoGrupoMonitoramento.TipoGrupoMonitoramentoRemoverGuard,
        TipoGrupoMonitoramentoGuardService
    ]
})
export class TipoGrupoMonitoramentoGuardModule { }
