import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as tipoGrupoMonitoramentoController from './../../../controller/cadastro/tipo-grupo-monitoramento/tipo-grupo-monitoramento.component';

@Injectable()
export class TipoGrupoMonitoramentoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'TIPO-GRUPO-MONITORAMENTO_LISTAR');
  }
}

@Injectable()
export class TipoGrupoMonitoramentoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'TIPO-GRUPO-MONITORAMENTO_ADICIONAR');
  }
}

@Injectable()
export class TipoGrupoMonitoramentoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'TIPO-GRUPO-MONITORAMENTO_EDITAR');
  }
}

@Injectable()
export class TipoGrupoMonitoramentoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'TIPO-GRUPO-MONITORAMENTO_DETALHAR');
  }
}

@Injectable()
export class TipoGrupoMonitoramentoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'TIPO-GRUPO-MONITORAMENTO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'tipo-grupo-monitoramento', component: homeComponent,
        children: [{ path: '',
          component: tipoGrupoMonitoramentoController.TipoGrupoMonitoramentoListarComponent, canActivate: [TipoGrupoMonitoramentoListarGuard]},
          { path: 'adicionar',
          component: tipoGrupoMonitoramentoController.TipoGrupoMonitoramentoAdicionarComponent,
              canActivate: [TipoGrupoMonitoramentoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: tipoGrupoMonitoramentoController.TipoGrupoMonitoramentoEditarComponent,
              canActivate: [TipoGrupoMonitoramentoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: tipoGrupoMonitoramentoController.TipoGrupoMonitoramentoDetalharComponent, canActivate: [TipoGrupoMonitoramentoDetalharGuard]}] };
    }
}
