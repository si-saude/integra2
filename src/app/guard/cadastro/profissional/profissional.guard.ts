import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as profissionalController from './../../../controller/cadastro/profissional/profissional.component';

@Injectable()
export class ProfissionalListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PROFISSIONAL_LISTAR');
  }
}

@Injectable()
export class ProfissionalAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PROFISSIONAL_ADICIONAR');
  }
}

@Injectable()
export class ProfissionalEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PROFISSIONAL_EDITAR');
  }
}

@Injectable()
export class ProfissionalDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PROFISSIONAL_DETALHAR');
  }
}

@Injectable()
export class ProfissionalRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PROFISSIONAL_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'profissional', component: homeComponent,
        children: [{ path: '',
          component: profissionalController.ProfissionalListarComponent, canActivate: [ProfissionalListarGuard]},
          { path: 'adicionar',
          component: profissionalController.ProfissionalAdicionarComponent,
              canActivate: [ProfissionalAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: profissionalController.ProfissionalEditarComponent,
              canActivate: [ProfissionalEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: profissionalController.ProfissionalDetalharComponent, canActivate: [ProfissionalDetalharGuard]}] };
    }
}
