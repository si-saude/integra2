import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './grupo-pergunta-ficha-coleta.guard';

@Injectable()
export class GrupoPerguntaFichaColetaGuardService implements GenericGuardService {

    constructor(private listar: guard.GrupoPerguntaFichaColetaListarGuard,
                private adicionar: guard.GrupoPerguntaFichaColetaAdicionarGuard,
                private editar: guard.GrupoPerguntaFichaColetaEditarGuard,
                private detalhar: guard.GrupoPerguntaFichaColetaDetalharGuard,
                private remover: guard.GrupoPerguntaFichaColetaRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'GRUPO-PERGUNTA-FICHA-COLETA_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'GRUPO-PERGUNTA-FICHA-COLETA_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'GRUPO-PERGUNTA-FICHA-COLETA_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'GRUPO-PERGUNTA-FICHA-COLETA_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'GRUPO-PERGUNTA-FICHA-COLETA_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
