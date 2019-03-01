import { NgModule } from '@angular/core';

import { CheckinGuardService } from './checkin.guard.service';
import * as checkin from './checkin.guard';

@NgModule({
    providers: [
        checkin.CheckinGuard,
        checkin.CheckoutGuard,
        CheckinGuardService
    ]
})
export class CheckinGuardModule { }
