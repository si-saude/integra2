import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './imovel.guard';

@Injectable()
export class ImovelGuardService implements GenericGuardService {

    constructor(private listar: guard.ImovelListarGuard,
                private adicionar: guard.ImovelAdicionarGuard,
                private editar: guard.ImovelEditarGuard,
                private detalhar: guard.ImovelDetalharGuard,
                private remover: guard.ImovelRemoverGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'IMOVEL_LISTAR': {
                guard = this.listar;
                break;
            }
            case 'IMOVEL_ADICIONAR': {
                guard = this.adicionar;
                break;
            }
            case 'IMOVEL_EDITAR': {
                guard = this.editar;
                break;
            }
            case 'IMOVEL_DETALHAR': {
                guard = this.detalhar;
                break;
            }
            case 'IMOVEL_REMOVER': {
                guard = this.remover;
                break;
            }
        }
        return guard;
    }
}
