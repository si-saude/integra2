import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as cargo from './cargo.component';

@NgModule({
    declarations: [
        cargo.CargoListarComponent,
        cargo.CargoAdicionarComponent,
        cargo.CargoEditarComponent,
        cargo.CargoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class CargoComponentModule { }
