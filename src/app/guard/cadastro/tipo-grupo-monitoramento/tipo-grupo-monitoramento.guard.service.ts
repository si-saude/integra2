import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './tipo-grupo-monitoramento.guard';

@Injectable()
export class TipoGrupoMonitoramentoGuardService implements GenericGuardService {

    constructor(private listar: guard.TipoGrupoMonitoramentoListarGuard,
                private adicionar: guard.TipoGrupoMonitoramentoAdicionarGuard,
                private editar: guard.TipoGrupoMonitoramentoEditarGuard,
                private detalhar: guard.TipoGrupoMonitoramentoDetalharGuard,
                private remover: guard.TipoGrupoMonitoramentoRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'TIPO-GRUPO-MONITORAMENTO_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'TIPO-GRUPO-MONITORAMENTO_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'TIPO-GRUPO-MONITORAMENTO_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'TIPO-GRUPO-MONITORAMENTO_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'TIPO-GRUPO-MONITORAMENTO_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
