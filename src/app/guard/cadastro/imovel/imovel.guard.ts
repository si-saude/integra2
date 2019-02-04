import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as imovelController from './../../../controller/cadastro/imovel/imovel.component';

@Injectable()
export class ImovelListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'IMOVEL_LISTAR');
  }
}

@Injectable()
export class ImovelAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'IMOVEL_ADICIONAR');
  }
}

@Injectable()
export class ImovelEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'IMOVEL_EDITAR');
  }
}

@Injectable()
export class ImovelDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'IMOVEL_DETALHAR');
  }
}

@Injectable()
export class ImovelRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'IMOVEL_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'imovel', component: homeComponent,
        children: [{ path: '',
          component: imovelController.ImovelListarComponent, canActivate: [ImovelListarGuard]},
          { path: 'adicionar',
          component: imovelController.ImovelAdicionarComponent,
              canActivate: [ImovelAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: imovelController.ImovelEditarComponent,
              canActivate: [ImovelEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: imovelController.ImovelDetalharComponent, canActivate: [ImovelDetalharGuard]}] };
    }
}
