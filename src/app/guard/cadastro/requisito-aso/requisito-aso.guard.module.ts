import { NgModule } from '@angular/core';

import { RequisitoAsoGuardService } from './requisito-aso.guard.service';
import * as requisitoAso from './requisito-aso.guard';

@NgModule({
    providers: [
        requisitoAso.RequisitoAsoListarGuard,
        requisitoAso.RequisitoAsoAdicionarGuard,
        requisitoAso.RequisitoAsoEditarGuard,
        requisitoAso.RequisitoAsoDetalharGuard,
        requisitoAso.RequisitoAsoRemoverGuard,
        RequisitoAsoGuardService
    ]
})
export class RequisitoAsoGuardModule { }
