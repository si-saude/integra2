import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as fichaColetaController from './../../../controller/processo/ficha-coleta/ficha-coleta.component';

@Injectable()
export class FichaColetaGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'FICHA-COLETA_EDITAR');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'ficha-coleta', component: homeComponent,
            children: [{ path: ':id',
            component: fichaColetaController.FichaColetaComponent, canActivate: [FichaColetaGuard]}] };
    }
}