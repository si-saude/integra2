import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as riscoPotencialController from './../../../controller/processo/risco-potencial/risco-potencial.component';

@Injectable()
export class RiscoPotencialGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'RISCO-POTENCIAL_LISTAR');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'risco-potencial', component: homeComponent,
            children: [{ path: '',
                component: riscoPotencialController.RiscoPotencialComponent,
                    canActivate: [RiscoPotencialGuard],
                    canDeactivate: [DeactivateGuard]}] };
    }
}
