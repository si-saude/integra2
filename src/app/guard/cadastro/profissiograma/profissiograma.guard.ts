import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as profissiogramaController from './../../../controller/cadastro/profissiograma/profissiograma.component';

@Injectable()
export class ProfissiogramaListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PROFISSIOGRAMA_LISTAR');
  }
}

@Injectable()
export class ProfissiogramaAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PROFISSIOGRAMA_ADICIONAR');
  }
}

@Injectable()
export class ProfissiogramaEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PROFISSIOGRAMA_EDITAR');
  }
}

@Injectable()
export class ProfissiogramaDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PROFISSIOGRAMA_DETALHAR');
  }
}

@Injectable()
export class ProfissiogramaRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PROFISSIOGRAMA_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'profissiograma', component: homeComponent,
        children: [{ path: '',
          component: profissiogramaController.ProfissiogramaListarComponent, canActivate: [ProfissiogramaListarGuard]},
          { path: 'adicionar',
          component: profissiogramaController.ProfissiogramaAdicionarComponent,
              canActivate: [ProfissiogramaAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: profissiogramaController.ProfissiogramaEditarComponent,
              canActivate: [ProfissiogramaEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: profissiogramaController.ProfissiogramaDetalharComponent, canActivate: [ProfissiogramaDetalharGuard]}] };
    }
}
