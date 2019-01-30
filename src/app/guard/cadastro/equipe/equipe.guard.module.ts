import { NgModule } from '@angular/core';

import { EquipeGuardService } from './equipe.guard.service';
import * as equipe from './equipe.guard';

@NgModule({
    providers: [
        equipe.EquipeListarGuard,
        equipe.EquipeAdicionarGuard,
        equipe.EquipeEditarGuard,
        equipe.EquipeDetalharGuard,
        equipe.EquipeRemoverGuard,
        EquipeGuardService
    ]
})
export class EquipeGuardModule { }
