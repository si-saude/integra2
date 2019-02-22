import { Route } from '@angular/router';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../generic/generic-guard.service';
import { CadastroGuardService } from './cadastro.guard.service';
import { ProcessoGuardService } from './processo.guard.service';

@Injectable()
export class GuardService {

    private permissoes: Map<string, boolean>;
    private guardService: GenericGuardService;

    constructor(private cadastro: CadastroGuardService,
        private processo: ProcessoGuardService) {
        this.clear();
    }

    checkCadastro(funcionalidade: string): boolean {
        this.guardService = this.cadastro;
        this.check(funcionalidade);
        return this.hasPermission(funcionalidade);
    }

    checkProcesso(funcionalidade: string): boolean {
        this.guardService = this.processo;
        this.check(funcionalidade);
        return this.hasPermission(funcionalidade);
    }

    findCheck(funcionalidade: string): boolean {
        const guardArray: Array<GenericGuardService> = new Array<GenericGuardService>();
        this.check(funcionalidade);
        guardArray.push(this.cadastro);
        guardArray.push(this.processo);
        for (let guard of guardArray){
            this.guardService = guard;
            if (this.hasPermission(funcionalidade) === true) {
                return true;
            }
        }
        return false;
    }

    clear() {
        this.permissoes = new Map<string, boolean>();
    }

    private check(funcionalidade: string) {
        if (!this.permissoes.has(funcionalidade)) {
            this.permissoes.set(funcionalidade,
                this.guardService.hasPermission(funcionalidade).checkPermission());
        }
    }

    private hasPermission(funcionalidade: string): boolean {
        return this.permissoes.get(funcionalidade);
    }
}
