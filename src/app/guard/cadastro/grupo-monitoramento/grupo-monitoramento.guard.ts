import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as grupoMonitoramentoController from './../../../controller/cadastro/grupo-monitoramento/grupo-monitoramento.component';

@Injectable()
export class GrupoMonitoramentoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GRUPO-MONITORAMENTO_LISTAR');
  }
}

@Injectable()
export class GrupoMonitoramentoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GRUPO-MONITORAMENTO_ADICIONAR');
  }
}

@Injectable()
export class GrupoMonitoramentoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GRUPO-MONITORAMENTO_EDITAR');
  }
}

@Injectable()
export class GrupoMonitoramentoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GRUPO-MONITORAMENTO_DETALHAR');
  }
}

@Injectable()
export class GrupoMonitoramentoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GRUPO-MONITORAMENTO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'grupo-monitoramento', component: homeComponent,
        children: [{ path: '',
          component: grupoMonitoramentoController.GrupoMonitoramentoListarComponent, canActivate: [GrupoMonitoramentoListarGuard]},
          { path: 'adicionar',
          component: grupoMonitoramentoController.GrupoMonitoramentoAdicionarComponent,
              canActivate: [GrupoMonitoramentoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: grupoMonitoramentoController.GrupoMonitoramentoEditarComponent,
              canActivate: [GrupoMonitoramentoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: grupoMonitoramentoController.GrupoMonitoramentoDetalharComponent, canActivate: [GrupoMonitoramentoDetalharGuard]}] };
    }
}
