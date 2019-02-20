import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as empregadoController from './../../../controller/cadastro/empregado/empregado.component';

@Injectable()
export class EmpregadoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EMPREGADO_LISTAR');
  }
}

@Injectable()
export class EmpregadoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EMPREGADO_ADICIONAR');
  }
}

@Injectable()
export class EmpregadoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EMPREGADO_EDITAR');
  }
}

@Injectable()
export class EmpregadoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EMPREGADO_DETALHAR');
  }
}

@Injectable()
export class EmpregadoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EMPREGADO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'empregado', component: homeComponent,
        children: [{ path: '',
          component: empregadoController.EmpregadoListarComponent, canActivate: [EmpregadoListarGuard]},
          { path: 'adicionar',
          component: empregadoController.EmpregadoAdicionarComponent,
              canActivate: [EmpregadoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: empregadoController.EmpregadoEditarComponent,
              canActivate: [EmpregadoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: empregadoController.EmpregadoDetalharComponent, canActivate: [EmpregadoDetalharGuard]}] };
    }
}
