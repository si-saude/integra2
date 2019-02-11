import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as gerenciaController from './../../../controller/cadastro/gerencia/gerencia.component';

@Injectable()
export class GerenciaListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GERENCIA_LISTAR');
  }
}

@Injectable()
export class GerenciaAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GERENCIA_ADICIONAR');
  }
}

@Injectable()
export class GerenciaEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GERENCIA_EDITAR');
  }
}

@Injectable()
export class GerenciaDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GERENCIA_DETALHAR');
  }
}

@Injectable()
export class GerenciaRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GERENCIA_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'gerencia', component: homeComponent,
        children: [{ path: '',
          component: gerenciaController.GerenciaListarComponent, canActivate: [GerenciaListarGuard]},
          { path: 'adicionar',
          component: gerenciaController.GerenciaAdicionarComponent,
              canActivate: [GerenciaAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: gerenciaController.GerenciaEditarComponent,
              canActivate: [GerenciaEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: gerenciaController.GerenciaDetalharComponent, canActivate: [GerenciaDetalharGuard]}] };
    }
}
