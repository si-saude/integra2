import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './regra-atendimento.guard';

@Injectable()
export class RegraAtendimentoGuardService implements GenericGuardService {

    constructor(private listar: guard.RegraAtendimentoListarGuard,
                private adicionar: guard.RegraAtendimentoAdicionarGuard,
                private editar: guard.RegraAtendimentoEditarGuard,
                private detalhar: guard.RegraAtendimentoDetalharGuard,
                private remover: guard.RegraAtendimentoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'REGRA-ATENDIMENTO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'REGRA-ATENDIMENTO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'REGRA-ATENDIMENTO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'REGRA-ATENDIMENTO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'REGRA-ATENDIMENTO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
