import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import * as ghee from './ghee.component';

@NgModule({
    declarations: [
        ghee.GheeListarComponent,
        ghee.GheeAdicionarComponent,
        ghee.GheeEditarComponent,
        ghee.GheeDetalharComponent
    ],
imports: [
    SharedModule
]})
export class GheeComponentModule { }
