import { NgModule } from '@angular/core';

import { RiscoGheGuardService } from './risco-ghe.guard.service';
import * as riscoGhe from './risco-ghe.guard';

@NgModule({
    providers: [
        riscoGhe.RiscoGheListarGuard,
        riscoGhe.RiscoGheAdicionarGuard,
        riscoGhe.RiscoGheEditarGuard,
        riscoGhe.RiscoGheDetalharGuard,
        riscoGhe.RiscoGheRemoverGuard,
        RiscoGheGuardService
    ]
})
export class RiscoGheGuardModule { }
