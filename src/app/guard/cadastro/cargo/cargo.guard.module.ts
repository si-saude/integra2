import { NgModule } from '@angular/core';

import { CargoGuardService } from './cargo.guard.service';
import * as cargo from './cargo.guard';

@NgModule({
    declarations: [

    ],
    providers: [
        cargo.CargoListarGuard,
        cargo.CargoAdicionarGuard,
        cargo.CargoEditarGuard,
        cargo.CargoDetalharGuard,
        cargo.CargoRemoverGuard,
        CargoGuardService
    ]
})
export class CargoGuardModule { }
