import { NgModule } from '@angular/core';

import { RiscoPotencialGuardService } from './risco-potencial.guard.service';
import * as riscoPotencial from './risco-potencial.guard';

@NgModule({
    providers: [
        riscoPotencial.RiscoPotencialGuard,
        RiscoPotencialGuardService
    ]
})
export class RiscoPotencialGuardModule { }
