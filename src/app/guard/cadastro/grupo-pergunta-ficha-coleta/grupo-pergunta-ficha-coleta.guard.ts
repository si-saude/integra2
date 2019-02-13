import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as grupoController from './../../../controller/cadastro/grupo-pergunta-ficha-coleta/grupo-pergunta-ficha-coleta.component';

@Injectable()
export class GrupoPerguntaFichaColetaListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GRUPO-PERGUNTA-FICHA-COLETA_LISTAR');
  }
}

@Injectable()
export class GrupoPerguntaFichaColetaAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GRUPO-PERGUNTA-FICHA-COLETA_ADICIONAR');
  }
}

@Injectable()
export class GrupoPerguntaFichaColetaEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GRUPO-PERGUNTA-FICHA-COLETA_EDITAR');
  }
}

@Injectable()
export class GrupoPerguntaFichaColetaDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GRUPO-PERGUNTA-FICHA-COLETA_DETALHAR');
  }
}

@Injectable()
export class GrupoPerguntaFichaColetaRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'GRUPO-PERGUNTA-FICHA-COLETA_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'grupo-pergunta-ficha-coleta', component: homeComponent,
        children: [{ path: '',
          component: grupoController.GrupoPerguntaFichaColetaListarComponent, canActivate: [GrupoPerguntaFichaColetaListarGuard]},
          { path: 'adicionar',
          component: grupoController.GrupoPerguntaFichaColetaAdicionarComponent,
              canActivate: [GrupoPerguntaFichaColetaAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: grupoController.GrupoPerguntaFichaColetaEditarComponent,
              canActivate: [GrupoPerguntaFichaColetaEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: grupoController.GrupoPerguntaFichaColetaDetalharComponent, canActivate: [GrupoPerguntaFichaColetaDetalharGuard]}] };
    }
}
