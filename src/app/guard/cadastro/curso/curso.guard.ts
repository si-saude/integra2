import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { HomeComponent } from './../../../home/home.component';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as cursoController from './../../../controller/cadastro/curso/curso.component';


@Injectable()
export class CursoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CURSO_LISTAR');
  }
}

@Injectable()
export class CursoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CURSO_ADICIONAR');
  }
}

@Injectable()
export class CursoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CURSO_EDITAR');
  }
}

@Injectable()
export class CursoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CURSO_DETALHAR');
  }
}

@Injectable()
export class CursoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CURSO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'curso', component: homeComponent,
        children: [{ path: '',
          component: cursoController.CursoListarComponent, canActivate: [CursoListarGuard]},
          { path: 'adicionar',
          component: cursoController.CursoAdicionarComponent,
              canActivate: [CursoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: cursoController.CursoEditarComponent,
              canActivate: [CursoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: cursoController.CursoDetalharComponent, canActivate: [CursoDetalharGuard]}] };
    }
}
