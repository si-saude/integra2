import { GenericGuard } from './../generic/generic-guard';
import { Injectable } from '@angular/core';

import { Helper } from './../generic/helper';
import { GenericGuardService } from './../generic/generic-guard.service';

import { BaseGuardService } from './cadastro/base/base.guard.service';
import { CargoGuardService } from './cadastro/cargo/cargo.guard.service';
import { CidadeGuardService } from './cadastro/cidade/cidade.guard.service';
import { ClinicaGuardService } from './cadastro/clinica/clinica.guard.service';
import { CriterioGuardService } from './cadastro/criterio/criterio.guard.service';
import { CursoGuardService } from './cadastro/curso/curso.guard.service';
import { DiagnosticoGuardService } from './cadastro/diagnostico/diagnostico.guard.service';
import { EixoGuardService } from './cadastro/eixo/eixo.guard.service';
import { EquipeGuardService } from './cadastro/equipe/equipe.guard.service';
import { ExameGuardService } from './cadastro/exame/exame.guard.service';
import { GerenciaGuardService } from './cadastro/gerencia/gerencia.guard.service';
import { GheGuardService } from './cadastro/ghe/ghe.guard.service';
import { GrupoPerguntaFichaColetaGuardService } from './cadastro/grupo-pergunta-ficha-coleta/grupo-pergunta-ficha-coleta.guard.service';
import { ImovelGuardService } from './cadastro/imovel/imovel.guard.service';
import { IndicadorSastGuardService } from './cadastro/indicador-sast/indicador-sast.guard.service';
import { IntervencaoGuardService } from './cadastro/intervencao/intervencao.guard.service';
import { PerfilGuardService } from './cadastro/perfil/perfil.guard.service';
import { PerguntaFichaColetaGuardService } from './cadastro/pergunta-ficha-coleta/pergunta-ficha-coleta.guard.service';
import { RegraAtendimentoGuardService } from './cadastro/regra-atendimento/regra-atendimento.guard.service';
import { RiscoGheGuardService } from './cadastro/risco-ghe/risco-ghe.guard.service';

@Injectable()
export class CadastroGuardService implements GenericGuardService {

    private helper: Helper;

    constructor(
        private base: BaseGuardService,
        private cargo: CargoGuardService,
        private cidade: CidadeGuardService,
        private clinica: ClinicaGuardService,
        private criterio: CriterioGuardService,
        private curso: CursoGuardService,
        private diagnostico: DiagnosticoGuardService,
        private eixo: EixoGuardService,
        private equipe: EquipeGuardService,
        private exame: ExameGuardService,
        private gerencia: GerenciaGuardService,
        private ghe: GheGuardService,
        private imovel: ImovelGuardService,
        private indicadorSast: IndicadorSastGuardService,
        private intervencao: IntervencaoGuardService,
        private perfil: PerfilGuardService,
        private perguntaFichaColeta: PerguntaFichaColetaGuardService,
        private regraAtendimento: RegraAtendimentoGuardService,
        private riscoGhe: RiscoGheGuardService,
        private grupoPerguntaFichaColeta: GrupoPerguntaFichaColetaGuardService) {

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
            case 'CLINICA': {
                guardService = this.clinica;
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
            case 'DIAGNOSTICO': {
                guardService = this.diagnostico;
                break;
            }
            case 'EIXO': {
                guardService = this.eixo;
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
            case 'GERENCIA': {
                guardService = this.gerencia;
                break;
            }
            case 'GHE': {
                guardService = this.ghe;
                break;
            }
            case 'IMOVEL': {
                guardService = this.imovel;
                break;
            }
            case 'INDICADOR-SAST': {
                guardService = this.indicadorSast;
                break;
            }
            case 'INTERVENCAO': {
                guardService = this.intervencao;
                break;
            }
            case 'PERFIL': {
                guardService = this.perfil;
                break;
            }
            case 'PERGUNTA-FICHA-COLETA': {
                guardService = this.perguntaFichaColeta;
                break;
            }
            case 'REGRA-ATENDIMENTO': {
                guardService = this.regraAtendimento;
                break;
            }
            case 'RISCO-GHE': {
                guardService = this.riscoGhe;
                break;
            }
            case 'GRUPO-PERGUNTA-FICHA-COLETA': {
                guardService = this.grupoPerguntaFichaColeta;
                break;
            }
        }
        return guardService.hasPermission(funcionalidade);
    }
}
