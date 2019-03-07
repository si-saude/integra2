import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as atendimentoController from './../../../controller/processo/atendimento/atendimento.component';
import * as filaController from './../../../controller/processo/atendimento/fila/fila.component';

@Injectable()
export class AtendimentoGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ATENDIMENTO_ATENDIMENTO');
  }
}

@Injectable()
export class AtendimentoFilaGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ATENDIMENTO_FILA');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'atendimento', component: homeComponent,
            children: [{ path: '',
                component: atendimentoController.AtendimentoComponent,
                    canActivate: [AtendimentoGuard],
                    canDeactivate: [DeactivateGuard]},
                    { path: 'fila',
                    component: filaController.FilaComponent,
                        canActivate: [AtendimentoFilaGuard]}] };
    }
}
