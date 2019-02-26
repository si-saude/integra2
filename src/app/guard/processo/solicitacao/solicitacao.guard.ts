import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import { DeactivateGuard } from './../../../guard/deactivate.guard';
import * as solicitacaoController from './../../../controller/processo/solicitacao/solicitacao.component';
import * as atendimentoOcupacionalController from './../../../controller/processo/solicitacao/atendimento-ocupacional/atendimento-ocupacional.component';

@Injectable()
export class SolicitacaoGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'SOLICITACAO_SOLICITAR');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'solicitacao', component: homeComponent,
            children: [{ path: '',
                component: solicitacaoController.SolicitacaoComponent, canActivate: [SolicitacaoGuard]},
                { path: 'atendimento-ocupacional',
                component: atendimentoOcupacionalController.AtendimentoOcupacionalComponent, 
                    canActivate: [SolicitacaoGuard]}] };
    }
}
