import { NgModule } from '@angular/core';

import { ExameGuardService } from './exame.guard.service';
import * as exame from './exame.guard';

@NgModule({
    providers: [
        exame.ExameListarGuard,
        exame.ExameAdicionarGuard,
        exame.ExameEditarGuard,
        exame.ExameDetalharGuard,
        exame.ExameRemoverGuard,
        ExameGuardService
    ]
})
export class ExameGuardModule { }
