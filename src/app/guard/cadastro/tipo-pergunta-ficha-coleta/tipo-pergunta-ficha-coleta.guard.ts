import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as tipoController from './../../../controller/cadastro/tipo-pergunta-ficha-coleta/tipo-pergunta-ficha-coleta.component';

@Injectable()
export class TipoPerguntaFichaColetaListarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'TIPO-PERGUNTA-FICHA-COLETA_LISTAR');
  }
}

@Injectable()
export class TipoPerguntaFichaColetaAdicionarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'TIPO-PERGUNTA-FICHA-COLETA_ADICIONAR');
  }
}

@Injectable()
export class TipoPerguntaFichaColetaEditarGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'TIPO-PERGUNTA-FICHA-COLETA_EDITAR');
  }
}

@Injectable()
export class TipoPerguntaFichaColetaDetalharGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'TIPO-PERGUNTA-FICHA-COLETA_DETALHAR');
  }
}

@Injectable()
export class TipoPerguntaFichaColetaRemoverGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'TIPO-PERGUNTA-FICHA-COLETA_REMOVER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'tipo-pergunta-ficha-coleta', component: homeComponent,
        children: [{ path: '',
          component: tipoController.TipoPerguntaFichaColetaListarComponent, canActivate: [TipoPerguntaFichaColetaListarGuard]},
          { path: 'adicionar',
          component: tipoController.TipoPerguntaFichaColetaAdicionarComponent,
              canActivate: [TipoPerguntaFichaColetaAdicionarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'editar/:id',
          component: tipoController.TipoPerguntaFichaColetaEditarComponent,
              canActivate: [TipoPerguntaFichaColetaEditarGuard],
              canDeactivate: [DeactivateGuard]},
          { path: 'detalhar/:id',
          component: tipoController.TipoPerguntaFichaColetaDetalharComponent, canActivate: [TipoPerguntaFichaColetaDetalharGuard]}] };
    }
}
