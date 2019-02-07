import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as indicadorSastController from './../../../controller/cadastro/indicador-sast/indicador-sast.component';

@Injectable()
export class IndicadorSastListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'INDICADOR-SAST_LISTAR');
  }
}

@Injectable()
export class IndicadorSastAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'INDICADOR-SAST_ADICIONAR');
  }
}

@Injectable()
export class IndicadorSastEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'INDICADOR-SAST_EDITAR');
  }
}

@Injectable()
export class IndicadorSastDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'INDICADOR-SAST_DETALHAR');
  }
}

@Injectable()
export class IndicadorSastRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'INDICADOR-SAST_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'indicador-sast', component: homeComponent,
        children: [{ path: '',
          component: indicadorSastController.IndicadorSastListarComponent, canActivate: [IndicadorSastListarGuard]},
          { path: 'adicionar',
          component: indicadorSastController.IndicadorSastAdicionarComponent,
              canActivate: [IndicadorSastAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: indicadorSastController.IndicadorSastEditarComponent,
              canActivate: [IndicadorSastEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: indicadorSastController.IndicadorSastDetalharComponent, canActivate: [IndicadorSastDetalharGuard]}] };
    }
}
