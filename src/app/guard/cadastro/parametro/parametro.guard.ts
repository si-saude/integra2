import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as parametroController from './../../../controller/cadastro/parametro/parametro.component';

@Injectable()
export class ParametroEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PARAMETRO_EDITAR');
  }
}

export class Routing {
  public static route(homeComponent): Route {
      return { path: 'parametro', component: homeComponent,
      children: [{ path: '',
        component: parametroController.ParametroComponent, canActivate: [ParametroEditarGuard], canDeactivate: [DeactivateGuard]}] };
  }
}