import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as localizacaoController from './../../../controller/cadastro/localizacao/localizacao.component';

@Injectable()
export class LocalizacaoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'LOCALIZACAO_LISTAR');
  }
}

@Injectable()
export class LocalizacaoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'LOCALIZACAO_ADICIONAR');
  }
}

@Injectable()
export class LocalizacaoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'LOCALIZACAO_EDITAR');
  }
}

@Injectable()
export class LocalizacaoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'LOCALIZACAO_DETALHAR');
  }
}

@Injectable()
export class LocalizacaoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'LOCALIZACAO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'localizacao', component: homeComponent,
        children: [{ path: '',
          component: localizacaoController.LocalizacaoListarComponent, canActivate: [LocalizacaoListarGuard]},
          { path: 'adicionar',
          component: localizacaoController.LocalizacaoAdicionarComponent,
              canActivate: [LocalizacaoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: localizacaoController.LocalizacaoEditarComponent,
              canActivate: [LocalizacaoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: localizacaoController.LocalizacaoDetalharComponent, canActivate: [LocalizacaoDetalharGuard]}] };
    }
}
