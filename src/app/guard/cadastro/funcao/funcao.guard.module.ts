import { NgModule } from '@angular/core';

import { FuncaoGuardService } from './funcao.guard.service';
import * as funcao from './funcao.guard';

@NgModule({
    providers: [
        funcao.FuncaoListarGuard,
        funcao.FuncaoAdicionarGuard,
        funcao.FuncaoEditarGuard,
        funcao.FuncaoDetalharGuard,
        funcao.FuncaoRemoverGuard,
        FuncaoGuardService
    ]
})
export class FuncaoGuardModule { }
