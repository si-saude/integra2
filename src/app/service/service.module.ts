import { NgModule } from '@angular/core';

import { BaseService } from './base.service';
import { CargoService } from './cargo.service';
import { CidadeService } from './cidade.service';
import { CriterioService } from './criterio.service';
import { CursoService } from './curso.service';
import { EquipeService } from './equipe.service';
import { ExameService } from './exame.service';
import { PerfilService } from './perfil.service';
import { UsuarioService } from './usuario.service';
import { UtilService } from './util.service';

@NgModule({
    providers: [
        BaseService,
        CargoService,
        CidadeService,
        CriterioService,
        CursoService,
        EquipeService,
        ExameService,
        PerfilService,
        UsuarioService,
        UtilService
    ]
})
export class ServiceModule { }
