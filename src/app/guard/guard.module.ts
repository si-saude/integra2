import { NgModule } from '@angular/core';

import { AuthGuard } from './auth.guard';
import { DeactivateGuard } from './deactivate.guard';
import { GuardService } from './guard.service';
import { CadastroGuardService } from './cadastro.guard.service';

import { BaseGuardModule } from './cadastro/base/base.guard.module';
import { CargoGuardModule } from './cadastro/cargo/cargo.guard.module';
import { CidadeGuardModule } from './cadastro/cidade/cidade.guard.module';
import { CriterioGuardModule } from './cadastro/criterio/criterio.guard.module';
import { CursoGuardModule } from './cadastro/curso/curso.guard.module';
import { EquipeGuardModule } from './cadastro/equipe/equipe.guard.module';
import { ExameGuardModule } from './cadastro/exame/exame.guard.module';
import { GheGuardModule } from './cadastro/ghe/ghe.guard.module';
import { ImovelGuardModule } from './cadastro/imovel/imovel.guard.module';
import { PerfilGuardModule } from './cadastro/perfil/perfil.guard.module';
import { RiscoGheGuardModule } from './cadastro/risco-ghe/risco-ghe.guard.module';


@NgModule({
    providers: [
        AuthGuard,
        GuardService,
        CadastroGuardService,
        DeactivateGuard
    ],
    imports: [
        BaseGuardModule,
        CargoGuardModule,
        CidadeGuardModule,
        CriterioGuardModule,
        CursoGuardModule,
        EquipeGuardModule,
        ExameGuardModule,
        GheGuardModule,
        ImovelGuardModule,
        PerfilGuardModule,
        RiscoGheGuardModule
    ]
})
export class GuardModule { }
