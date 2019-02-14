import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as servico from './servico.component';

@NgModule({
    declarations: [
        servico.ServicoListarComponent,
        servico.ServicoAdicionarComponent,
        servico.ServicoEditarComponent,
        servico.ServicoDetalharComponent
    ],
imports: [
    SharedModule
]})
export class ServicoComponentModule { }
