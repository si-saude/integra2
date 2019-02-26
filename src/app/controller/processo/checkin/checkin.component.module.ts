import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as checkin from './checkin.component';

@NgModule({
    declarations: [
        checkin.CheckinComponent
    ],
imports: [
    SharedModule
]})
export class CheckinComponentModule { }
