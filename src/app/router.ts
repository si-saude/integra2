import {Routes} from '@angular/router';

import { AuthGuard } from './guard/auth.guard';
import { DeactivateGuard } from './guard/deactivate.guard';
import { HomeComponent } from './home/home.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { NovaSenhaComponent } from './usuario/nova-senha/nova-senha.component';

import * as baseGuard from './guard/cadastro/base/base.guard';
import * as cargoGuard from './guard/cadastro/cargo/cargo.guard';
import * as cidadeGuard from './guard/cadastro/cidade/cidade.guard';
import * as clinicaGuard from './guard/cadastro/clinica/clinica.guard';
import * as criterioGuard from './guard/cadastro/criterio/criterio.guard';
import * as cursoGuard from './guard/cadastro/curso/curso.guard';
import * as eixoGuard from './guard/cadastro/eixo/eixo.guard';
import * as equipeGuard from './guard/cadastro/equipe/equipe.guard';
import * as exameGuard from './guard/cadastro/exame/exame.guard';
import * as gheGuard from './guard/cadastro/ghe/ghe.guard';
import * as imovelGuard from './guard/cadastro/imovel/imovel.guard';
import * as perfilGuard from './guard/cadastro/perfil/perfil.guard';
import * as riscoGheGuard from './guard/cadastro/risco-ghe/risco-ghe.guard';

export const appRoutes: Routes = [
    { path : 'home', component : HomeComponent, canActivate: [AuthGuard]},
    { path : 'login', component : UsuarioComponent,
        children : [{ path : '', component : LoginComponent}] },
    { path : 'nova-senha', component : UsuarioComponent,
        children : [{ path : '', component : NovaSenhaComponent}]},
    baseGuard.Routing.route(HomeComponent),
    cargoGuard.Routing.route(HomeComponent),
    cidadeGuard.Routing.route(HomeComponent),
    clinicaGuard.Routing.route(HomeComponent),
    criterioGuard.Routing.route(HomeComponent),
    cursoGuard.Routing.route(HomeComponent),
    eixoGuard.Routing.route(HomeComponent),
    equipeGuard.Routing.route(HomeComponent),
    exameGuard.Routing.route(HomeComponent),
    gheGuard.Routing.route(HomeComponent),
    imovelGuard.Routing.route(HomeComponent),
    perfilGuard.Routing.route(HomeComponent),
    riscoGheGuard.Routing.route(HomeComponent),
    { path : '', redirectTo: '/home', pathMatch: 'full'}
];
