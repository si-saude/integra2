import { NgModule } from '@angular/core';

import { BaseGuardService } from './base.guard.service';
import * as base from './base.guard';

@NgModule({
    providers: [
        base.BaseListarGuard,
        base.BaseAdicionarGuard,
        base.BaseEditarGuard,
        base.BaseDetalharGuard,
        base.BaseRemoverGuard,
        BaseGuardService
    ]
})
export class BaseGuardModule { }
