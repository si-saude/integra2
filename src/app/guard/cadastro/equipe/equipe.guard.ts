import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as equipeController from './../../../controller/cadastro/equipe/equipe.component';

@Injectable()
export class EquipeListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EQUIPE_LISTAR');
  }
}

@Injectable()
export class EquipeAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EQUIPE_ADICIONAR');
  }
}

@Injectable()
export class EquipeEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EQUIPE_EDITAR');
  }
}

@Injectable()
export class EquipeDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EQUIPE_DETALHAR');
  }
}

@Injectable()
export class EquipeRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EQUIPE_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'equipe', component: homeComponent,
        children: [{ path: '',
          component: equipeController.EquipeListarComponent, canActivate: [EquipeListarGuard]},
          { path: 'adicionar',
          component: equipeController.EquipeAdicionarComponent,
              canActivate: [EquipeAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: equipeController.EquipeEditarComponent,
              canActivate: [EquipeEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: equipeController.EquipeDetalharComponent, canActivate: [EquipeDetalharGuard]}] };
    }
}
