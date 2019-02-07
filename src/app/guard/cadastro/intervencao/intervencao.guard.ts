import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as intervencaoController from './../../../controller/cadastro/intervencao/intervencao.component';

@Injectable()
export class IntervencaoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'INTERVENCAO_LISTAR');
  }
}

@Injectable()
export class IntervencaoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'INTERVENCAO_ADICIONAR');
  }
}

@Injectable()
export class IntervencaoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'INTERVENCAO_EDITAR');
  }
}

@Injectable()
export class IntervencaoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'INTERVENCAO_DETALHAR');
  }
}

@Injectable()
export class IntervencaoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'INTERVENCAO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'intervencao', component: homeComponent,
        children: [{ path: '',
          component: intervencaoController.IntervencaoListarComponent, canActivate: [IntervencaoListarGuard]},
          { path: 'adicionar',
          component: intervencaoController.IntervencaoAdicionarComponent,
              canActivate: [IntervencaoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: intervencaoController.IntervencaoEditarComponent,
              canActivate: [IntervencaoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: intervencaoController.IntervencaoDetalharComponent, canActivate: [IntervencaoDetalharGuard]}] };
    }
}
