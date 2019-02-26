import { NgModule } from '@angular/core';

import { ProfissiogramaGuardService } from './profissiograma.guard.service';
import * as profissiograma from './profissiograma.guard';

@NgModule({
    providers: [
        profissiograma.ProfissiogramaListarGuard,
        profissiograma.ProfissiogramaAdicionarGuard,
        profissiograma.ProfissiogramaEditarGuard,
        profissiograma.ProfissiogramaDetalharGuard,
        profissiograma.ProfissiogramaRemoverGuard,
        ProfissiogramaGuardService
    ]
})
export class ProfissiogramaGuardModule { }
