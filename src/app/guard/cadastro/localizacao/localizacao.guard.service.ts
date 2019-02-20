import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './localizacao.guard';

@Injectable()
export class LocalizacaoGuardService implements GenericGuardService {

    constructor(private listar: guard.LocalizacaoListarGuard,
                private adicionar: guard.LocalizacaoAdicionarGuard,
                private editar: guard.LocalizacaoEditarGuard,
                private detalhar: guard.LocalizacaoDetalharGuard,
                private remover: guard.LocalizacaoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'LOCALIZACAO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'LOCALIZACAO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'LOCALIZACAO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'LOCALIZACAO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'LOCALIZACAO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
