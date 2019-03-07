import { NgModule } from '@angular/core';

import { SharedModule } from './../../../shared.module';
import * as fila from './fila.component';

@NgModule({
    declarations: [
        fila.FilaComponent
    ],
imports: [
    SharedModule
]})
export class FilaComponentModule { }
