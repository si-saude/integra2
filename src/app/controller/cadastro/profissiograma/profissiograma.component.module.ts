import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as profissiograma from './profissiograma.component';

@NgModule({
    declarations: [
        profissiograma.ProfissiogramaListarComponent,
        profissiograma.ProfissiogramaAdicionarComponent,
        profissiograma.ProfissiogramaEditarComponent,
        profissiograma.ProfissiogramaDetalharComponent
    ],
imports: [
    SharedModule
]})
export class ProfissiogramaComponentModule { }
