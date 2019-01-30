import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as cidadeController from './../../../controller/cadastro/cidade/cidade.component';

@Injectable()
export class CidadeListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CIDADE_LISTAR');
  }
}

@Injectable()
export class CidadeAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CIDADE_ADICIONAR');
  }
}

@Injectable()
export class CidadeEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CIDADE_EDITAR');
  }
}

@Injectable()
export class CidadeDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CIDADE_DETALHAR');
  }
}

@Injectable()
export class CidadeRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CIDADE_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'cidade', component: homeComponent,
        children: [{ path: '',
          component: cidadeController.CidadeListarComponent, canActivate: [CidadeListarGuard]},
          { path: 'adicionar',
          component: cidadeController.CidadeAdicionarComponent,
              canActivate: [CidadeAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: cidadeController.CidadeEditarComponent,
              canActivate: [CidadeEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: cidadeController.CidadeDetalharComponent, canActivate: [CidadeDetalharGuard]}] };
    }
}
