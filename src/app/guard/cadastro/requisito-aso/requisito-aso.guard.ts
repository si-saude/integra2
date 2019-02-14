import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as requisitoAsoController from './../../../controller/cadastro/requisito-aso/requisito-aso.component';

@Injectable()
export class RequisitoAsoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REQUISITO-ASO_LISTAR');
  }
}

@Injectable()
export class RequisitoAsoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REQUISITO-ASO_ADICIONAR');
  }
}

@Injectable()
export class RequisitoAsoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REQUISITO-ASO_EDITAR');
  }
}

@Injectable()
export class RequisitoAsoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REQUISITO-ASO_DETALHAR');
  }
}

@Injectable()
export class RequisitoAsoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REQUISITO-ASO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'requisito-aso', component: homeComponent,
        children: [{ path: '',
          component: requisitoAsoController.RequisitoAsoListarComponent, canActivate: [RequisitoAsoListarGuard]},
          { path: 'adicionar',
          component: requisitoAsoController.RequisitoAsoAdicionarComponent,
              canActivate: [RequisitoAsoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: requisitoAsoController.RequisitoAsoEditarComponent,
              canActivate: [RequisitoAsoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: requisitoAsoController.RequisitoAsoDetalharComponent, canActivate: [RequisitoAsoDetalharGuard]}] };
    }
}
