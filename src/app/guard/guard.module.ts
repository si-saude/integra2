import { NgModule } from '@angular/core';

import { AuthGuard } from './auth.guard';
import { DeactivateGuard } from './deactivate.guard';
import { GuardService } from './guard.service';
import { CadastroGuardService } from './cadastro.guard.service';

import { AlimentoGuardModule } from './cadastro/alimento/alimento.guard.module';
import { AtividadeFisicaGuardModule } from './cadastro/atividade-fisica/atividade-fisica.guard.module';
import { BaseGuardModule } from './cadastro/base/base.guard.module';
import { CargoGuardModule } from './cadastro/cargo/cargo.guard.module';
import { CidadeGuardModule } from './cadastro/cidade/cidade.guard.module';
import { ClinicaGuardModule } from './cadastro/clinica/clinica.guard.module';
import { CriterioGuardModule } from './cadastro/criterio/criterio.guard.module';
import { CursoGuardModule } from './cadastro/curso/curso.guard.module';
import { DiagnosticoGuardModule } from './cadastro/diagnostico/diagnostico.guard.module';
import { EixoGuardModule } from './cadastro/eixo/eixo.guard.module';
import { EnfaseGuardModule } from './cadastro/enfase/enfase.guard.module';
import { EquipeGuardModule } from './cadastro/equipe/equipe.guard.module';
import { ExameGuardModule } from './cadastro/exame/exame.guard.module';
import { FuncaoGuardModule } from './cadastro/funcao/funcao.guard.module';
import { GerenciaGuardModule } from './cadastro/gerencia/gerencia.guard.module';
import { GheGuardModule } from './cadastro/ghe/ghe.guard.module';
import { GrupoPerguntaFichaColetaGuardModule } from './cadastro/grupo-pergunta-ficha-coleta/grupo-pergunta-ficha-coleta.guard.module';
import { ImovelGuardModule } from './cadastro/imovel/imovel.guard.module';
import { IndicadorSastGuardModule } from './cadastro/indicador-sast/indicador-sast.guard.module';
import { IntervencaoGuardModule } from './cadastro/intervencao/intervencao.guard.module';
import { MedidaCaseiraGuardModule } from './cadastro/medida-caseira/medida-caseira.guard.module';
import { PerfilGuardModule } from './cadastro/perfil/perfil.guard.module';
import { RegimeGuardModule } from './cadastro/regime/regime.guard.module';
import { PerguntaFichaColetaGuardModule } from './cadastro/pergunta-ficha-coleta/pergunta-ficha-coleta.guard.module';
import { RegraAtendimentoGuardModule } from './cadastro/regra-atendimento/regra-atendimento.guard.module';
import { RiscoGheGuardModule } from './cadastro/risco-ghe/risco-ghe.guard.module';


@NgModule({
    providers: [
        AuthGuard,
        GuardService,
        CadastroGuardService,
        DeactivateGuard
    ],
    imports: [
        AlimentoGuardModule,
        AtividadeFisicaGuardModule,
        BaseGuardModule,
        CargoGuardModule,
        CidadeGuardModule,
        ClinicaGuardModule,
        CriterioGuardModule,
        CursoGuardModule,
        DiagnosticoGuardModule,
        EixoGuardModule,
        EnfaseGuardModule,
        EquipeGuardModule,
        ExameGuardModule,
        FuncaoGuardModule,
        GerenciaGuardModule,
        GheGuardModule,
        GrupoPerguntaFichaColetaGuardModule,
        ImovelGuardModule,
        IndicadorSastGuardModule,
        IntervencaoGuardModule,
        MedidaCaseiraGuardModule,
        PerfilGuardModule,
        RegimeGuardModule,
        PerguntaFichaColetaGuardModule,
        RegraAtendimentoGuardModule,
        RiscoGheGuardModule
    ]
})
export class GuardModule { }
