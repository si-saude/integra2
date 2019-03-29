import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as tempoAtendimentoController from './../../../controller/report/tempo-atendimento/tempo-atendimento.component';

@Injectable()
export class TempoAtendimentoGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REPORT_TEMPO-ATENDIMENTO');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'tempo-atendimento', component: homeComponent,
            children: [{ path: '',
                component: tempoAtendimentoController.TempoAtendimentoComponent,
                    canActivate: [TempoAtendimentoGuard]}] };
    }
}
