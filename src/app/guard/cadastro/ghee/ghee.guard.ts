import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as gheeController from './../../../controller/cadastro/ghee/ghee.component';

@Injectable()
export class GheeListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GHEE_LISTAR');
  }
}

@Injectable()
export class GheeAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GHEE_ADICIONAR');
  }
}

@Injectable()
export class GheeEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GHEE_EDITAR');
  }
}

@Injectable()
export class GheeDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GHEE_DETALHAR');
  }
}

@Injectable()
export class GheeRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GHEE_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'ghee', component: homeComponent,
        children: [{ path: '',
          component: gheeController.GheeListarComponent, canActivate: [GheeListarGuard]},
          { path: 'adicionar',
          component: gheeController.GheeAdicionarComponent,
              canActivate: [GheeAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: gheeController.GheeEditarComponent,
              canActivate: [GheeEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: gheeController.GheeDetalharComponent, canActivate: [GheeDetalharGuard]}] };
    }
}
