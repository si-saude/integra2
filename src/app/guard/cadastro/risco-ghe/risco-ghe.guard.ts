import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as riscoGheController from './../../../controller/cadastro/risco-ghe/risco-ghe.component';

@Injectable()
export class RiscoGheListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'RISCO-GHE_LISTAR');
  }
}

@Injectable()
export class RiscoGheAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'RISCO-GHE_ADICIONAR');
  }
}

@Injectable()
export class RiscoGheEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'RISCO-GHE_EDITAR');
  }
}

@Injectable()
export class RiscoGheDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'RISCO-GHE_DETALHAR');
  }
}

@Injectable()
export class RiscoGheRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'RISCO-GHE_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'risco-ghe', component: homeComponent,
        children: [{ path: '',
          component: riscoGheController.RiscoGheListarComponent, canActivate: [RiscoGheListarGuard]},
          { path: 'adicionar',
          component: riscoGheController.RiscoGheAdicionarComponent,
              canActivate: [RiscoGheAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: riscoGheController.RiscoGheEditarComponent,
              canActivate: [RiscoGheEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: riscoGheController.RiscoGheDetalharComponent, canActivate: [RiscoGheDetalharGuard]}] };
    }
}
