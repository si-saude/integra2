import { NgModule } from '@angular/core';

import { SharedModule } from './../../../shared.module';
import * as checkout from './checkout.component';
import { CriarAtendimentoValidator } from './criar-atendimento.validator';


@NgModule({
    declarations: [
        checkout.CheckoutComponent
    ],
imports: [
    SharedModule
],
providers: [ CriarAtendimentoValidator]})
export class CheckoutComponentModule { }
