import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './servico.guard';

@Injectable()
export class ServicoGuardService implements GenericGuardService {

    constructor(private listar: guard.ServicoListarGuard,
                private adicionar: guard.ServicoAdicionarGuard,
                private editar: guard.ServicoEditarGuard,
                private detalhar: guard.ServicoDetalharGuard,
                private remover: guard.ServicoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'SERVICO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'SERVICO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'SERVICO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'SERVICO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'SERVICO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
