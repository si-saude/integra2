import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as enfaseController from './../../../controller/cadastro/enfase/enfase.component';

@Injectable()
export class EnfaseListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ENFASE_LISTAR');
  }
}

@Injectable()
export class EnfaseAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ENFASE_ADICIONAR');
  }
}

@Injectable()
export class EnfaseEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ENFASE_EDITAR');
  }
}

@Injectable()
export class EnfaseDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ENFASE_DETALHAR');
  }
}

@Injectable()
export class EnfaseRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ENFASE_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'enfase', component: homeComponent,
        children: [{ path: '',
          component: enfaseController.EnfaseListarComponent, canActivate: [EnfaseListarGuard]},
          { path: 'adicionar',
          component: enfaseController.EnfaseAdicionarComponent,
              canActivate: [EnfaseAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: enfaseController.EnfaseEditarComponent,
              canActivate: [EnfaseEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: enfaseController.EnfaseDetalharComponent, canActivate: [EnfaseDetalharGuard]}] };
    }
}
