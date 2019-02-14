import { NgModule } from '@angular/core';

import { GheeGuardService } from './ghee.guard.service';
import * as ghee from './ghee.guard';

@NgModule({
    providers: [
        ghee.GheeListarGuard,
        ghee.GheeAdicionarGuard,
        ghee.GheeEditarGuard,
        ghee.GheeDetalharGuard,
        ghee.GheeRemoverGuard,
        GheeGuardService
    ]
})
export class GheeGuardModule { }
