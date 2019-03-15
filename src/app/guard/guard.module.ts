import { NgModule } from '@angular/core';

import { AuthGuard } from './auth.guard';
import { DeactivateGuard } from './deactivate.guard';
import { GuardService } from './guard.service';
import { CadastroGuardService } from './cadastro.guard.service';
import { ProcessoGuardService } from './processo.guard.service';
import { ReportGuardService } from './report.guard.service';

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
import { EmpregadoGuardModule } from './cadastro/empregado/empregado.guard.module';
import { EnfaseGuardModule } from './cadastro/enfase/enfase.guard.module';
import { EquipeGuardModule } from './cadastro/equipe/equipe.guard.module';
import { ExameGuardModule } from './cadastro/exame/exame.guard.module';
import { FuncaoGuardModule } from './cadastro/funcao/funcao.guard.module';
import { GerenciaGuardModule } from './cadastro/gerencia/gerencia.guard.module';
import { GheGuardModule } from './cadastro/ghe/ghe.guard.module';
import { GheeGuardModule } from './cadastro/ghee/ghee.guard.module';
import { GrupoMonitoramentoGuardModule } from './cadastro/grupo-monitoramento/grupo-monitoramento.guard.module';
import { GrupoPerguntaFichaColetaGuardModule } from './cadastro/grupo-pergunta-ficha-coleta/grupo-pergunta-ficha-coleta.guard.module';
import { ImovelGuardModule } from './cadastro/imovel/imovel.guard.module';
import { IndicadorSastGuardModule } from './cadastro/indicador-sast/indicador-sast.guard.module';
import { IntervencaoGuardModule } from './cadastro/intervencao/intervencao.guard.module';
import { LocalizacaoGuardModule } from './cadastro/localizacao/localizacao.guard.module';
import { MedidaCaseiraGuardModule } from './cadastro/medida-caseira/medida-caseira.guard.module';
import { ParametroGuardModule } from './cadastro/parametro/parametro.guard.module';
import { PerfilGuardModule } from './cadastro/perfil/perfil.guard.module';
import { PerguntaFichaColetaGuardModule } from './cadastro/pergunta-ficha-coleta/pergunta-ficha-coleta.guard.module';
import { ProfissiogramaGuardModule } from './cadastro/profissiograma/profissiograma.guard.module';
import { ProfissionalGuardModule } from './cadastro/profissional/profissional.guard.module';
import { QuestionarioGuardModule } from './cadastro/questionario/questionario.guard.module';
import { RegimeGuardModule } from './cadastro/regime/regime.guard.module';
import { RegraAtendimentoGuardModule } from './cadastro/regra-atendimento/regra-atendimento.guard.module';
import { RequisitoAsoGuardModule } from './cadastro/requisito-aso/requisito-aso.guard.module';
import { RiscoGheGuardModule } from './cadastro/risco-ghe/risco-ghe.guard.module';
import { ServicoGuardModule } from './cadastro/servico/servico.guard.module';
import { TipoGrupoMonitoramentoGuardModule } from './cadastro/tipo-grupo-monitoramento/tipo-grupo-monitoramento.guard.module';
import { UsuarioGuardModule } from './cadastro/usuario/usuario.guard.module';

import { AtendimentoGuardModule } from './processo/atendimento/atendimento.guard.module';
import { AvaliacaoAtendimentoGuardModule } from './processo/avaliacao-atendimento/avaliacao-atendimento.guard.module';
import { CheckinGuardModule } from './processo/checkin/checkin.guard.module';
import { FichaColetaGuardModule } from './processo/ficha-coleta/ficha-coleta.guard.module';
import { RiscoPotencialGuardModule } from './processo/risco-potencial/risco-potencial.guard.module';
import { SolicitacaoGuardModule } from './processo/solicitacao/solicitacao.guard.module';

import { AgendaGuardModule } from './report/agenda/agenda.guard.module';

@NgModule({
    providers: [
        AuthGuard,
        GuardService,
        CadastroGuardService,
        ProcessoGuardService,
        ReportGuardService,
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
        EmpregadoGuardModule,
        EnfaseGuardModule,
        EquipeGuardModule,
        ExameGuardModule,
        FuncaoGuardModule,
        GerenciaGuardModule,
        GheGuardModule,
        GheeGuardModule,
        GrupoMonitoramentoGuardModule,
        GrupoPerguntaFichaColetaGuardModule,
        ImovelGuardModule,
        IndicadorSastGuardModule,
        IntervencaoGuardModule,
        LocalizacaoGuardModule,
        MedidaCaseiraGuardModule,
        ParametroGuardModule,
        PerfilGuardModule,
        PerguntaFichaColetaGuardModule,
        ProfissiogramaGuardModule,
        ProfissionalGuardModule,
        QuestionarioGuardModule,
        RegimeGuardModule,
        RegraAtendimentoGuardModule,
        RequisitoAsoGuardModule,
        RiscoGheGuardModule,
        ServicoGuardModule,
        TipoGrupoMonitoramentoGuardModule,
        UsuarioGuardModule,

        AtendimentoGuardModule,
        AvaliacaoAtendimentoGuardModule,
        CheckinGuardModule,
        FichaColetaGuardModule,
        RiscoPotencialGuardModule,
        SolicitacaoGuardModule,

        AgendaGuardModule
    ]
})
export class GuardModule { }
