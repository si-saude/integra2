import { NgModule } from '@angular/core';

import { ParametroGuardService } from './parametro.guard.service';
import * as parametro from './parametro.guard';

@NgModule({
    providers: [
        parametro.ParametroEditarGuard,
        ParametroGuardService
    ]
})
export class ParametroGuardModule { }
