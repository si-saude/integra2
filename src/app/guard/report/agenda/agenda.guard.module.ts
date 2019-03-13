import { NgModule } from '@angular/core';

import { AgendaGuardService } from './agenda.guard.service';
import * as agenda from './agenda.guard';

@NgModule({
    providers: [
        agenda.AgendaGuard,
        AgendaGuardService
    ]
})
export class AgendaGuardModule { }
