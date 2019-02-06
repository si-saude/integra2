import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as clinicaController from './../../../controller/cadastro/clinica/clinica.component';

@Injectable()
export class ClinicaListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CLINICA_LISTAR');
  }
}

@Injectable()
export class ClinicaAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CLINICA_ADICIONAR');
  }
}

@Injectable()
export class ClinicaEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CLINICA_EDITAR');
  }
}

@Injectable()
export class ClinicaDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CLINICA_DETALHAR');
  }
}

@Injectable()
export class ClinicaRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CLINICA_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'clinica', component: homeComponent,
        children: [{ path: '',
          component: clinicaController.ClinicaListarComponent, canActivate: [ClinicaListarGuard]},
          { path: 'adicionar',
          component: clinicaController.ClinicaAdicionarComponent,
              canActivate: [ClinicaAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: clinicaController.ClinicaEditarComponent,
              canActivate: [ClinicaEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: clinicaController.ClinicaDetalharComponent, canActivate: [ClinicaDetalharGuard]}] };
    }
}
