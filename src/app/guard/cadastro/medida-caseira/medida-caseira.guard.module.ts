import { NgModule } from '@angular/core';

import { MedidaCaseiraGuardService } from './medida-caseira.guard.service';
import * as medidaCaseira from './medida-caseira.guard';

@NgModule({
    providers: [
        medidaCaseira.MedidaCaseiraListarGuard,
        medidaCaseira.MedidaCaseiraAdicionarGuard,
        medidaCaseira.MedidaCaseiraEditarGuard,
        medidaCaseira.MedidaCaseiraDetalharGuard,
        medidaCaseira.MedidaCaseiraRemoverGuard,
        MedidaCaseiraGuardService
    ]
})
export class MedidaCaseiraGuardModule { }
