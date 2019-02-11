import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './tipo-pergunta-ficha-coleta.guard';

@Injectable()
export class TipoPerguntaFichaColetaGuardService implements GenericGuardService {

    constructor(private listar: guard.TipoPerguntaFichaColetaListarGuard,
                private adicionar: guard.TipoPerguntaFichaColetaAdicionarGuard,
                private editar: guard.TipoPerguntaFichaColetaEditarGuard,
                private detalhar: guard.TipoPerguntaFichaColetaDetalharGuard,
                private remover: guard.TipoPerguntaFichaColetaRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'TIPO-PERGUNTA-FICHA-COLETA_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'TIPO-PERGUNTA-FICHA-COLETA_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'TIPO-PERGUNTA-FICHA-COLETA_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'TIPO-PERGUNTA-FICHA-COLETA_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'TIPO-PERGUNTA-FICHA-COLETA_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
