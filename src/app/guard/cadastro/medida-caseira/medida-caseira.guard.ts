import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as medidaCaseiraController from './../../../controller/cadastro/medida-caseira/medida-caseira.component';

@Injectable()
export class MedidaCaseiraListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'MEDIDA-CASEIRA_LISTAR');
  }
}

@Injectable()
export class MedidaCaseiraAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'MEDIDA-CASEIRA_ADICIONAR');
  }
}

@Injectable()
export class MedidaCaseiraEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'MEDIDA-CASEIRA_EDITAR');
  }
}

@Injectable()
export class MedidaCaseiraDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'MEDIDA-CASEIRA_DETALHAR');
  }
}

@Injectable()
export class MedidaCaseiraRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'MEDIDA-CASEIRA_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'medida-caseira', component: homeComponent,
        children: [{ path: '',
          component: medidaCaseiraController.MedidaCaseiraListarComponent, canActivate: [MedidaCaseiraListarGuard]},
          { path: 'adicionar',
          component: medidaCaseiraController.MedidaCaseiraAdicionarComponent,
              canActivate: [MedidaCaseiraAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: medidaCaseiraController.MedidaCaseiraEditarComponent,
              canActivate: [MedidaCaseiraEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: medidaCaseiraController.MedidaCaseiraDetalharComponent, canActivate: [MedidaCaseiraDetalharGuard]}] };
    }
}
