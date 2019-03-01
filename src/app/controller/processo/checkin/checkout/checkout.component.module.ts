import { NgModule } from '@angular/core';

import { SharedModule } from './../../../shared.module';
import * as checkout from './checkout.component';

@NgModule({
    declarations: [
        checkout.CheckoutComponent
    ],
imports: [
    SharedModule
]})
export class CheckoutComponentModule { }
