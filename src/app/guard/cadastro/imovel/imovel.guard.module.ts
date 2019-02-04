import { NgModule } from '@angular/core';

import { ImovelGuardService } from './imovel.guard.service';
import * as imovel from './imovel.guard';

@NgModule({
    providers: [
        imovel.ImovelListarGuard,
        imovel.ImovelAdicionarGuard,
        imovel.ImovelEditarGuard,
        imovel.ImovelDetalharGuard,
        imovel.ImovelRemoverGuard,
        ImovelGuardService
    ]
})
export class ImovelGuardModule { }
