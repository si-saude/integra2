import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as regimeController from './../../../controller/cadastro/regime/regime.component';

@Injectable()
export class RegimeListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REGIME_LISTAR');
  }
}

@Injectable()
export class RegimeAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REGIME_ADICIONAR');
  }
}

@Injectable()
export class RegimeEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REGIME_EDITAR');
  }
}

@Injectable()
export class RegimeDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REGIME_DETALHAR');
  }
}

@Injectable()
export class RegimeRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REGIME_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'regime', component: homeComponent,
        children: [{ path: '',
          component: regimeController.RegimeListarComponent, canActivate: [RegimeListarGuard]},
          { path: 'adicionar',
          component: regimeController.RegimeAdicionarComponent,
              canActivate: [RegimeAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: regimeController.RegimeEditarComponent,
              canActivate: [RegimeEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: regimeController.RegimeDetalharComponent, canActivate: [RegimeDetalharGuard]}] };
    }
}
