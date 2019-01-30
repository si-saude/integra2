import { GenericGuard } from './../generic/generic-guard';
import { Injectable } from '@angular/core';

import { Helper } from './../generic/helper';
import { GenericGuardService } from './../generic/generic-guard.service';

import { BaseGuardService } from './cadastro/base/base.guard.service';
import { CargoGuardService } from './cadastro/cargo/cargo.guard.service';
import { CidadeGuardService } from './cadastro/cidade/cidade.guard.service';
import { CriterioGuardService } from './cadastro/criterio/criterio.guard.service';
import { CursoGuardService } from './cadastro/curso/curso.guard.service';
import { EquipeGuardService } from './cadastro/equipe/equipe.guard.service';
import { ExameGuardService } from './cadastro/exame/exame.guard.service';
import { PerfilGuardService } from './cadastro/perfil/perfil.guard.service';
import { RiscoGheGuardService } from './cadastro/risco-ghe/risco-ghe.guard.service';

@Injectable()
export class CadastroGuardService implements GenericGuardService {

    private helper: Helper;

    constructor(
        private base: BaseGuardService,
        private cargo: CargoGuardService,
        private cidade: CidadeGuardService,
        private criterio: CriterioGuardService,
        private curso: CursoGuardService,
        private equipe: EquipeGuardService,
        private exame: ExameGuardService,
        private perfil: PerfilGuardService,
        private riscoGhe: RiscoGheGuardService) {

            this.helper = new Helper();
    }

    hasPermission(funcionalidade: string): GenericGuard {
        let guardService: GenericGuardService;
        const grupo = this.helper.ignoreLastStringArrayItem(funcionalidade, '_');
        switch (grupo) {
            case 'BASE': {
                guardService = this.base;
                break;
            }
            case 'CARGO': {
                guardService = this.cargo;
                break;
            }
            case 'CIDADE': {
                guardService = this.cidade;
                break;
            }
            case 'CRITERIO': {
                guardService = this.criterio;
                break;
            }
            case 'CURSO': {
                guardService = this.curso;
                break;
            }
            case 'EQUIPE': {
                guardService = this.equipe;
                break;
            }
            case 'EXAME': {
                guardService = this.exame;
                break;
            }
            case 'PERFIL': {
                guardService = this.perfil;
                break;
            }
            case 'RISCO-GHE': {
                guardService = this.riscoGhe;
                break;
            }
        }
        return guardService.hasPermission(funcionalidade);
    }
}
