import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as questionarioController from './../../../controller/cadastro/questionario/questionario.component';

@Injectable()
export class QuestionarioListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'QUESTIONARIO_LISTAR');
  }
}

@Injectable()
export class QuestionarioAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'QUESTIONARIO_ADICIONAR');
  }
}

@Injectable()
export class QuestionarioEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'QUESTIONARIO_EDITAR');
  }
}

@Injectable()
export class QuestionarioDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'QUESTIONARIO_DETALHAR');
  }
}

@Injectable()
export class QuestionarioRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'QUESTIONARIO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'questionario', component: homeComponent,
        children: [{ path: '',
          component: questionarioController.QuestionarioListarComponent, canActivate: [QuestionarioListarGuard]},
          { path: 'adicionar',
          component: questionarioController.QuestionarioAdicionarComponent,
              canActivate: [QuestionarioAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: questionarioController.QuestionarioEditarComponent,
              canActivate: [QuestionarioEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: questionarioController.QuestionarioDetalharComponent, canActivate: [QuestionarioDetalharGuard]}] };
    }
}
