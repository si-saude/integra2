import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as agendaController from './../../../controller/report/agenda/agenda.component';

@Injectable()
export class AgendaGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REPORT_AGENDA');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'agenda', component: homeComponent,
            children: [{ path: '',
                component: agendaController.AgendaComponent,
                    canActivate: [AgendaGuard]}] };
    }
}
