import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './grupo-monitoramento.guard';

@Injectable()
export class GrupoMonitoramentoGuardService implements GenericGuardService {

    constructor(private listar: guard.GrupoMonitoramentoListarGuard,
                private adicionar: guard.GrupoMonitoramentoAdicionarGuard,
                private editar: guard.GrupoMonitoramentoEditarGuard,
                private detalhar: guard.GrupoMonitoramentoDetalharGuard,
                private remover: guard.GrupoMonitoramentoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'GRUPO-MONITORAMENTO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'GRUPO-MONITORAMENTO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'GRUPO-MONITORAMENTO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'GRUPO-MONITORAMENTO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'GRUPO-MONITORAMENTO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
