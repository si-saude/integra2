import { NgModule } from '@angular/core';

import { AlimentoComponentModule } from './cadastro/alimento/alimento.component.module';
import { AtividadeFisicaComponentModule  } from './cadastro/atividade-fisica/atividade-fisica.component.module';
import { BaseComponentModule } from './cadastro/base/base.component.module';
import { CargoComponentModule } from './cadastro/cargo/cargo.component.module';
import { CidadeComponentModule } from './cadastro/cidade/cidade.component.module';
import { ClinicaComponentModule } from './cadastro/clinica/clinica.component.module';
import { CriterioComponentModule } from './cadastro/criterio/criterio.component.module';
import { CursoComponentModule } from './cadastro/curso/curso.component.module';
import { DiagnosticoComponentModule } from './cadastro/diagnostico/diagnostico.component.module';
import { EixoComponentModule } from './cadastro/eixo/eixo.component.module';
import { EmpregadoComponentModule } from './cadastro/empregado/empregado.component.module';
import { EnfaseComponentModule } from './cadastro/enfase/enfase.component.module';
import { EquipeComponentModule } from './cadastro/equipe/equipe.component.module';
import { ExameComponentModule } from './cadastro/exame/exame.component.module';
import { FuncaoComponentModule } from './cadastro/funcao/funcao.component.module';
import { GerenciaComponentModule } from './cadastro/gerencia/gerencia.component.module';
import { GheComponentModule } from './cadastro/ghe/ghe.component.module';
import { GheeComponentModule } from './cadastro/ghee/ghee.component.module';
import { GrupoMonitoramentoComponentModule } from './cadastro/grupo-monitoramento/grupo-monitoramento.component.module';
import { GrupoPerguntaFichaColetaComponentModule } from './cadastro/grupo-pergunta-ficha-coleta/grupo-pergunta-ficha-coleta.component.module';
import { ImovelComponentModule } from './cadastro/imovel/imovel.component.module';
import { IndicadorSastComponentModule } from './cadastro/indicador-sast/indicador-sast.component.module';
import { IntervencaoComponentModule } from './cadastro/intervencao/intervencao.component.module';
import { LocalizacaoComponentModule } from './cadastro/localizacao/localizacao.component.module';
import { MedidaCaseiraComponentModule } from './cadastro/medida-caseira/medida-caseira.component.module';
import { ParametroComponentModule } from './cadastro/parametro/parametro.component.module';
import { PerfilComponentModule } from './cadastro/perfil/perfil.component.module';
import { PerguntaFichaColetaComponentModule } from './cadastro/pergunta-ficha-coleta/pergunta-ficha-coleta.component.module';
import { ProfissiogramaComponentModule } from './cadastro/profissiograma/profissiograma.component.module';
import { ProfissionalComponentModule } from './cadastro/profissional/profissional.component.module';
import { QuestionarioComponentModule } from './cadastro/questionario/questionario.component.module';
import { RegimeComponentModule } from './cadastro/regime/regime.component.module';
import { RegraAtendimentoComponentModule } from './cadastro/regra-atendimento/regra-atendimento.component.module';
import { RequisitoAsoComponentModule } from './cadastro/requisito-aso/requisito-aso.component.module';
import { RiscoGheComponentModule } from './cadastro/risco-ghe/risco-ghe.component.module';
import { ServicoComponentModule } from './cadastro/servico/servico.component.module';
import { TipoGrupoMonitoramentoComponentModule } from './cadastro/tipo-grupo-monitoramento/tipo-grupo-monitoramento.component.module';
import { UsuarioComponentModule } from './cadastro/usuario/usuario.component.module';

import { AtendimentoComponentModule } from './processo/atendimento/atendimento.component.module';
import { AtendimentoOcupacionalComponentModule } from './processo/solicitacao/atendimento-ocupacional/atendimento-ocupacional.component.module';
import { AvaliacaoAtendimentoComponentModule } from './processo/avaliacao-atendimento/avaliacao-atendimento.component.module';
import { CancelarAtendimentoOcupacionalComponentModule } from './processo/solicitacao/cancelar/cancelar-atendimento-ocupacional/cancelar-atendimento-ocupacional.component.module';
import { CancelarComponentModule } from './processo/solicitacao/cancelar/cancelar.component.module';
import { CheckinComponentModule } from './processo/checkin/checkin.component.module';
import { CheckoutComponentModule } from './processo/checkin/checkout/checkout.component.module';
import { FilaComponentModule } from './processo/atendimento/fila/fila.component.module';
import { FichaColetaComponentModule } from './processo/ficha-coleta/ficha-coleta.component.module';
import { QuestaoComponentModule } from './processo/avaliacao-atendimento/questao/questao.component.module';
import { RiscoPotencialComponentModule } from './processo/risco-potencial/risco-potencial.component.module';
import { SolicitacaoComponentModule } from './processo/solicitacao/solicitacao.component.module';

import { AgendaComponentModule } from './report/agenda/agenda.component.module';
import { TempoAtendimentoComponentModule } from './report/tempo-atendimento/tempo-atendimento.component.module';

@NgModule({
    imports: [
        AlimentoComponentModule,
        AtividadeFisicaComponentModule,
        BaseComponentModule,
        CargoComponentModule,
        CidadeComponentModule,
        ClinicaComponentModule,
        CriterioComponentModule,
        CursoComponentModule,
        DiagnosticoComponentModule,
        EixoComponentModule,
        EmpregadoComponentModule,
        EnfaseComponentModule,
        EquipeComponentModule,
        ExameComponentModule,
        FuncaoComponentModule,
        GerenciaComponentModule,
        GheComponentModule,
        GheeComponentModule,
        GrupoMonitoramentoComponentModule,
        GrupoPerguntaFichaColetaComponentModule,
        ImovelComponentModule,
        IndicadorSastComponentModule,
        IntervencaoComponentModule,
        LocalizacaoComponentModule,
        MedidaCaseiraComponentModule,
        ParametroComponentModule,
        PerfilComponentModule,
        PerguntaFichaColetaComponentModule,
        ProfissiogramaComponentModule,
        ProfissionalComponentModule,
        QuestionarioComponentModule,
        RegimeComponentModule,
        RegraAtendimentoComponentModule,
        RequisitoAsoComponentModule,
        RiscoGheComponentModule,
        ServicoComponentModule,
        TipoGrupoMonitoramentoComponentModule,
        UsuarioComponentModule,

        AtendimentoComponentModule,
        AtendimentoOcupacionalComponentModule,
        AvaliacaoAtendimentoComponentModule,
        CancelarAtendimentoOcupacionalComponentModule,
        CancelarComponentModule,
        CheckinComponentModule,
        CheckoutComponentModule,
        FilaComponentModule,
        FichaColetaComponentModule,
        QuestaoComponentModule,
        RiscoPotencialComponentModule,
        SolicitacaoComponentModule,

        AgendaComponentModule,
        TempoAtendimentoComponentModule
    ]
})

export class ControllerModule { }
