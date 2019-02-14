import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as servicoController from './../../../controller/cadastro/servico/servico.component';

@Injectable()
export class ServicoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'SERVICO_LISTAR');
  }
}

@Injectable()
export class ServicoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'SERVICO_ADICIONAR');
  }
}

@Injectable()
export class ServicoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'SERVICO_EDITAR');
  }
}

@Injectable()
export class ServicoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'SERVICO_DETALHAR');
  }
}

@Injectable()
export class ServicoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'SERVICO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'servico', component: homeComponent,
        children: [{ path: '',
          component: servicoController.ServicoListarComponent, canActivate: [ServicoListarGuard]},
          { path: 'adicionar',
          component: servicoController.ServicoAdicionarComponent,
              canActivate: [ServicoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: servicoController.ServicoEditarComponent,
              canActivate: [ServicoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: servicoController.ServicoDetalharComponent, canActivate: [ServicoDetalharGuard]}] };
    }
}
