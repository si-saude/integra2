import { NgModule } from '@angular/core';

import { ServicoGuardService } from './servico.guard.service';
import * as servico from './servico.guard';

@NgModule({
    providers: [
        servico.ServicoListarGuard,
        servico.ServicoAdicionarGuard,
        servico.ServicoEditarGuard,
        servico.ServicoDetalharGuard,
        servico.ServicoRemoverGuard,
        ServicoGuardService
    ]
})
export class ServicoGuardModule { }
