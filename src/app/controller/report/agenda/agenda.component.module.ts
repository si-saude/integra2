import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as agenda from './agenda.component';

@NgModule({
    declarations: [
        agenda.AgendaComponent
    ],
imports: [
    SharedModule
]})
export class AgendaComponentModule { }
