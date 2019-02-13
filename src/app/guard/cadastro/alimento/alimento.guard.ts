import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { HomeComponent } from './../../../home/home.component';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as alimentoController from './../../../controller/cadastro/alimento/alimento.component';


@Injectable()
export class AlimentoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ALIMENTO_LISTAR');
  }
}

@Injectable()
export class AlimentoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ALIMENTO_ADICIONAR');
  }
}

@Injectable()
export class AlimentoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ALIMENTO_EDITAR');
  }
}

@Injectable()
export class AlimentoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ALIMENTO_DETALHAR');
  }
}

@Injectable()
export class AlimentoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'ALIMENTO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'alimento', component: homeComponent,
        children: [{ path: '',
          component: alimentoController.AlimentoListarComponent, canActivate: [AlimentoListarGuard]},
          { path: 'adicionar',
          component: alimentoController.AlimentoAdicionarComponent,
              canActivate: [AlimentoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: alimentoController.AlimentoEditarComponent,
              canActivate: [AlimentoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: alimentoController.AlimentoDetalharComponent, canActivate: [AlimentoDetalharGuard]}] };
    }
}
