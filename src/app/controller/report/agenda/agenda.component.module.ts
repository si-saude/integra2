import { NgModule } from '@angular/core';

import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';

import { SharedModule } from './../../shared.module';
import * as agenda from './agenda.component';

@NgModule({
    declarations: [
        CalendarComponent,
        agenda.AgendaComponent
    ],
imports: [
    SharedModule
]})
export class AgendaComponentModule { }
