import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as tipoGrupoMonitoramento from './tipo-grupo-monitoramento.component';

@NgModule({
    declarations: [
        tipoGrupoMonitoramento.TipoGrupoMonitoramentoListarComponent,
        tipoGrupoMonitoramento.TipoGrupoMonitoramentoAdicionarComponent,
        tipoGrupoMonitoramento.TipoGrupoMonitoramentoEditarComponent,
        tipoGrupoMonitoramento.TipoGrupoMonitoramentoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class TipoGrupoMonitoramentoComponentModule { }
