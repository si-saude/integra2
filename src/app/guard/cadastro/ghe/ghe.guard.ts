import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as gheController from './../../../controller/cadastro/ghe/ghe.component';

@Injectable()
export class GheListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GHE_LISTAR');
  }
}

@Injectable()
export class GheAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GHE_ADICIONAR');
  }
}

@Injectable()
export class GheEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GHE_EDITAR');
  }
}

@Injectable()
export class GheDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GHE_DETALHAR');
  }
}

@Injectable()
export class GheRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GHE_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'ghe', component: homeComponent,
        children: [{ path: '',
          component: gheController.GheListarComponent, canActivate: [GheListarGuard]},
          { path: 'adicionar',
          component: gheController.GheAdicionarComponent,
              canActivate: [GheAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: gheController.GheEditarComponent,
              canActivate: [GheEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: gheController.GheDetalharComponent, canActivate: [GheDetalharGuard]}] };
    }
}
