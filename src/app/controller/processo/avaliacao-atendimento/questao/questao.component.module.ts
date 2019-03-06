import { NgModule } from '@angular/core';

import { SharedModule } from './../../../shared.module';
import * as questao from './questao.component';

@NgModule({
    declarations: [
        questao.QuestaoComponent
    ],
imports: [
    SharedModule
]})
export class QuestaoComponentModule { }
