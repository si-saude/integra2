import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as perguntaController from './../../../controller/cadastro/pergunta-ficha-coleta/pergunta-ficha-coleta.component';

@Injectable()
export class PerguntaFichaColetaListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PERGUNTA-FICHA-COLETA_LISTAR');
  }
}

@Injectable()
export class PerguntaFichaColetaAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PERGUNTA-FICHA-COLETA_ADICIONAR');
  }
}

@Injectable()
export class PerguntaFichaColetaEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PERGUNTA-FICHA-COLETA_EDITAR');
  }
}

@Injectable()
export class PerguntaFichaColetaDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PERGUNTA-FICHA-COLETA_DETALHAR');
  }
}

@Injectable()
export class PerguntaFichaColetaRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'PERGUNTA-FICHA-COLETA_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'pergunta-ficha-coleta', component: homeComponent,
        children: [{ path: '',
          component: perguntaController.PerguntaFichaColetaListarComponent, canActivate: [PerguntaFichaColetaListarGuard]},
          { path: 'adicionar',
          component: perguntaController.PerguntaFichaColetaAdicionarComponent,
              canActivate: [PerguntaFichaColetaAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: perguntaController.PerguntaFichaColetaEditarComponent,
              canActivate: [PerguntaFichaColetaEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: perguntaController.PerguntaFichaColetaDetalharComponent, canActivate: [PerguntaFichaColetaDetalharGuard]}] };
    }
}
