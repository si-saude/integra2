import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as atendimentoController from './../../../controller/processo/atendimento/atendimento.component';

@Injectable()
export class AtendimentoGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ATENDIMENTO_ATENDIMENTO');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'atendimento', component: homeComponent,
            children: [{ path: '',
                component: atendimentoController.AtendimentoComponent,
                    canActivate: [AtendimentoGuard],
                    canDeactivate: [DeactivateGuard]}] };
    }
}
