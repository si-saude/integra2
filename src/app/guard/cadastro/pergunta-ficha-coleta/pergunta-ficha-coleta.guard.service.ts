import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './pergunta-ficha-coleta.guard';

@Injectable()
export class PerguntaFichaColetaGuardService implements GenericGuardService {

    constructor(private listar: guard.PerguntaFichaColetaListarGuard,
                private adicionar: guard.PerguntaFichaColetaAdicionarGuard,
                private editar: guard.PerguntaFichaColetaEditarGuard,
                private detalhar: guard.PerguntaFichaColetaDetalharGuard,
                private remover: guard.PerguntaFichaColetaRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'PERGUNTA-FICHA-COLETA_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'PERGUNTA-FICHA-COLETA_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'PERGUNTA-FICHA-COLETA_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'PERGUNTA-FICHA-COLETA_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'PERGUNTA-FICHA-COLETA_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
