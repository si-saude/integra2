import { NgModule } from '@angular/core';

import { CursoGuardService } from './curso.guard.service';
import * as curso from './curso.guard';

@NgModule({
    declarations: [

    ],
    providers: [
        curso.CursoListarGuard,
        curso.CursoAdicionarGuard,
        curso.CursoEditarGuard,
        curso.CursoDetalharGuard,
        curso.CursoRemoverGuard,
        CursoGuardService
    ]
})
export class CursoGuardModule { }
