import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as exameController from './../../../controller/cadastro/exame/exame.component';

@Injectable()
export class ExameListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EXAME_LISTAR');
  }
}

@Injectable()
export class ExameAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EXAME_ADICIONAR');
  }
}

@Injectable()
export class ExameEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EXAME_EDITAR');
  }
}

@Injectable()
export class ExameDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EXAME_DETALHAR');
  }
}

@Injectable()
export class ExameRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'EXAME_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'exame', component: homeComponent,
        children: [{ path: '',
          component: exameController.ExameListarComponent, canActivate: [ExameListarGuard]},
          { path: 'adicionar',
          component: exameController.ExameAdicionarComponent,
              canActivate: [ExameAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: exameController.ExameEditarComponent,
              canActivate: [ExameEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: exameController.ExameDetalharComponent, canActivate: [ExameDetalharGuard]}] };
    }
}
