import { NgModule } from '@angular/core';

import { GerenciaGuardService } from './gerencia.guard.service';
import * as gerencia from './gerencia.guard';

@NgModule({
    providers: [
        gerencia.GerenciaListarGuard,
        gerencia.GerenciaAdicionarGuard,
        gerencia.GerenciaEditarGuard,
        gerencia.GerenciaDetalharGuard,
        gerencia.GerenciaRemoverGuard,
        GerenciaGuardService
    ]
})
export class GerenciaGuardModule { }
