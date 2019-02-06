import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as diagnosticoController from './../../../controller/cadastro/diagnostico/diagnostico.component';

@Injectable()
export class DiagnosticoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'DIAGNOSTICO_LISTAR');
  }
}

@Injectable()
export class DiagnosticoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'DIAGNOSTICO_ADICIONAR');
  }
}

@Injectable()
export class DiagnosticoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'DIAGNOSTICO_EDITAR');
  }
}

@Injectable()
export class DiagnosticoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'DIAGNOSTICO_DETALHAR');
  }
}

@Injectable()
export class DiagnosticoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'DIAGNOSTICO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'diagnostico', component: homeComponent,
        children: [{ path: '',
          component: diagnosticoController.DiagnosticoListarComponent, canActivate: [DiagnosticoListarGuard]},
          { path: 'adicionar',
          component: diagnosticoController.DiagnosticoAdicionarComponent,
              canActivate: [DiagnosticoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: diagnosticoController.DiagnosticoEditarComponent,
              canActivate: [DiagnosticoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: diagnosticoController.DiagnosticoDetalharComponent, canActivate: [DiagnosticoDetalharGuard]}] };
    }
}
