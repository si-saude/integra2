import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as criterioController from './../../../controller/cadastro/criterio/criterio.component';

@Injectable()
export class CriterioListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CRITERIO_LISTAR');
  }
}

@Injectable()
export class CriterioAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CRITERIO_ADICIONAR');
  }
}

@Injectable()
export class CriterioEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CRITERIO_EDITAR');
  }
}

@Injectable()
export class CriterioDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CRITERIO_DETALHAR');
  }
}

@Injectable()
export class CriterioRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CRITERIO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'criterio', component: homeComponent,
        children: [{ path: '',
          component: criterioController.CriterioListarComponent, canActivate: [CriterioListarGuard]},
          { path: 'adicionar',
          component: criterioController.CriterioAdicionarComponent,
              canActivate: [CriterioAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: criterioController.CriterioEditarComponent,
              canActivate: [CriterioEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: criterioController.CriterioDetalharComponent, canActivate: [CriterioDetalharGuard]}] };
    }
}
