import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as atividadeFisicaController from './../../../controller/cadastro/atividade-fisica/atividade-fisica.component';

@Injectable()
export class AtividadeFisicaListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ATIVIDADE-FISICA_LISTAR');
  }
}

@Injectable()
export class AtividadeFisicaAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ATIVIDADE-FISICA_ADICIONAR');
  }
}

@Injectable()
export class AtividadeFisicaEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ATIVIDADE-FISICA_EDITAR');
  }
}

@Injectable()
export class AtividadeFisicaDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ATIVIDADE-FISICA_DETALHAR');
  }
}

@Injectable()
export class AtividadeFisicaRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ATIVIDADE-FISICA_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'atividade-fisica', component: homeComponent,
        children: [{ path: '',
          component: atividadeFisicaController.AtividadeFisicaListarComponent, canActivate: [AtividadeFisicaListarGuard]},
          { path: 'adicionar',
          component: atividadeFisicaController.AtividadeFisicaAdicionarComponent,
              canActivate: [AtividadeFisicaAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: atividadeFisicaController.AtividadeFisicaEditarComponent,
              canActivate: [AtividadeFisicaEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: atividadeFisicaController.AtividadeFisicaDetalharComponent, canActivate: [AtividadeFisicaDetalharGuard]}] };
    }
}
