import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as eixoController from './../../../controller/cadastro/eixo/eixo.component';

@Injectable()
export class EixoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EIXO_LISTAR');
  }
}

@Injectable()
export class EixoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EIXO_ADICIONAR');
  }
}

@Injectable()
export class EixoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EIXO_EDITAR');
  }
}

@Injectable()
export class EixoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EIXO_DETALHAR');
  }
}

@Injectable()
export class EixoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EIXO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'eixo', component: homeComponent,
        children: [{ path: '',
          component: eixoController.EixoListarComponent, canActivate: [EixoListarGuard]},
          { path: 'adicionar',
          component: eixoController.EixoAdicionarComponent,
              canActivate: [EixoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: eixoController.EixoEditarComponent,
              canActivate: [EixoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: eixoController.EixoDetalharComponent, canActivate: [EixoDetalharGuard]}] };
    }
}
