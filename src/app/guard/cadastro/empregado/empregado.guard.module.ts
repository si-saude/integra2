import { NgModule } from '@angular/core';

import { EmpregadoGuardService } from './empregado.guard.service';
import * as empregado from './empregado.guard';

@NgModule({
    providers: [
        empregado.EmpregadoListarGuard,
        empregado.EmpregadoAdicionarGuard,
        empregado.EmpregadoEditarGuard,
        empregado.EmpregadoDetalharGuard,
        empregado.EmpregadoRemoverGuard,
        EmpregadoGuardService
    ]
})
export class EmpregadoGuardModule { }
