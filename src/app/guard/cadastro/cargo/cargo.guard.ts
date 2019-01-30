import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { HomeComponent } from './../../../home/home.component';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as cargoController from './../../../controller/cadastro/cargo/cargo.component';


@Injectable()
export class CargoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CARGO_LISTAR');
  }
}

@Injectable()
export class CargoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CARGO_ADICIONAR');
  }
}

@Injectable()
export class CargoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CARGO_EDITAR');
  }
}

@Injectable()
export class CargoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CARGO_DETALHAR');
  }
}

@Injectable()
export class CargoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CARGO_REMOVER');
  }
}

export class Routing {
  public static route(homeComponent): Route {
      return { path: 'cargo', component: homeComponent,
      children: [{ path: '',
        component: cargoController.CargoListarComponent, canActivate: [CargoListarGuard]},
        { path: 'adicionar',
        component: cargoController.CargoAdicionarComponent,
            canActivate: [CargoAdicionarGuard],
            canDeactivate: [DeactivateGuard]},
        { path: 'editar/:id',
        component: cargoController.CargoEditarComponent,
            canActivate: [CargoEditarGuard],
            canDeactivate: [DeactivateGuard]},
        { path: 'detalhar/:id',
        component: cargoController.CargoDetalharComponent, canActivate: [CargoDetalharGuard]}] };
  }
}
