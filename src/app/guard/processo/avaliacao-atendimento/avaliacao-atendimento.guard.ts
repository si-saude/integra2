import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import * as avaliacaoAtendimentoController from './../../../controller/processo/avaliacao-atendimento/avaliacao-atendimento.component';
import * as questaoController from './../../../controller/processo/avaliacao-atendimento/questao/questao.component';

@Injectable()
export class AvaliacaoAtendimentoGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'AVALIACAO-ATENDIMENTO_RESPONDER');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'avaliacao-atendimento', component: homeComponent,
            children: [{ path: '',
                component: avaliacaoAtendimentoController.AvaliacaoAtendimentoComponent,
                    canActivate: [AvaliacaoAtendimentoGuard]},
                    { path: 'questao/:id',
                    component: questaoController.QuestaoComponent, canActivate: [AvaliacaoAtendimentoGuard]}] };
    }
}
