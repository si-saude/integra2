import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as baseController from './../../../controller/cadastro/base/base.component';

@Injectable()
export class BaseListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'BASE_LISTAR');
  }
}

@Injectable()
export class BaseAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'BASE_ADICIONAR');
  }
}

@Injectable()
export class BaseEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'BASE_EDITAR');
  }
}

@Injectable()
export class BaseDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'BASE_DETALHAR');
  }
}

@Injectable()
export class BaseRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'BASE_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'base', component: homeComponent,
        children: [{ path: '',
          component: baseController.BaseListarComponent, canActivate: [BaseListarGuard]},
          { path: 'adicionar',
          component: baseController.BaseAdicionarComponent,
              canActivate: [BaseAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: baseController.BaseEditarComponent,
              canActivate: [BaseEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: baseController.BaseDetalharComponent, canActivate: [BaseDetalharGuard]}] };
    }
}
