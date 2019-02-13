import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as funcaoController from './../../../controller/cadastro/funcao/funcao.component';

@Injectable()
export class FuncaoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'FUNCAO_LISTAR');
  }
}

@Injectable()
export class FuncaoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'FUNCAO_ADICIONAR');
  }
}

@Injectable()
export class FuncaoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'FUNCAO_EDITAR');
  }
}

@Injectable()
export class FuncaoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'FUNCAO_DETALHAR');
  }
}

@Injectable()
export class FuncaoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'FUNCAO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'funcao', component: homeComponent,
        children: [{ path: '',
          component: funcaoController.FuncaoListarComponent, canActivate: [FuncaoListarGuard]},
          { path: 'adicionar',
          component: funcaoController.FuncaoAdicionarComponent,
              canActivate: [FuncaoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: funcaoController.FuncaoEditarComponent,
              canActivate: [FuncaoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: funcaoController.FuncaoDetalharComponent, canActivate: [FuncaoDetalharGuard]}] };
    }
}
