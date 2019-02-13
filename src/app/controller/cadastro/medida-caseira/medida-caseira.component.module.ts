import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as medidaCaseira from './medida-caseira.component';

@NgModule({
    declarations: [
        medidaCaseira.MedidaCaseiraListarComponent,
        medidaCaseira.MedidaCaseiraAdicionarComponent,
        medidaCaseira.MedidaCaseiraEditarComponent,
        medidaCaseira.MedidaCaseiraDetalharComponent
    ],
imports: [
    SharedModule
]})
export class MedidaCaseiraComponentModule { }
