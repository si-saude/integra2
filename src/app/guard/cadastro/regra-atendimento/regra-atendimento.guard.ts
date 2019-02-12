import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as regraController from './../../../controller/cadastro/regra-atendimento/regra-atendimento.component';

@Injectable()
export class RegraAtendimentoListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REGRA-ATENDIMENTO_LISTAR');
  }
}

@Injectable()
export class RegraAtendimentoAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REGRA-ATENDIMENTO_ADICIONAR');
  }
}

@Injectable()
export class RegraAtendimentoEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REGRA-ATENDIMENTO_EDITAR');
  }
}

@Injectable()
export class RegraAtendimentoDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REGRA-ATENDIMENTO_DETALHAR');
  }
}

@Injectable()
export class RegraAtendimentoRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'REGRA-ATENDIMENTO_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'regra-atendimento', component: homeComponent,
        children: [{ path: '',
          component: regraController.RegraAtendimentoListarComponent, canActivate: [RegraAtendimentoListarGuard]},
          { path: 'adicionar',
          component: regraController.RegraAtendimentoAdicionarComponent,
              canActivate: [RegraAtendimentoAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: regraController.RegraAtendimentoEditarComponent,
              canActivate: [RegraAtendimentoEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: regraController.RegraAtendimentoDetalharComponent, canActivate: [RegraAtendimentoDetalharGuard]}] };
    }
}
