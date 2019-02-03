import { NgModule } from '@angular/core';

import { GheGuardService } from './ghe.guard.service';
import * as ghe from './ghe.guard';

@NgModule({
    providers: [
        ghe.GheListarGuard,
        ghe.GheAdicionarGuard,
        ghe.GheEditarGuard,
        ghe.GheDetalharGuard,
        ghe.GheRemoverGuard,
        GheGuardService
    ]
})
export class GheGuardModule { }
