import { NgModule } from '@angular/core';

import { AlimentoService } from './alimento.service';
import { AtendimentoService } from './atendimento.service';
import { AvaliacaoAtendimentoService } from './avaliacao-atendimento.service';
import { AtividadeFisicaService } from './atividade-fisica.service';
import { BaseService } from './base.service';
import { CargoService } from './cargo.service';
import { CidadeService } from './cidade.service';
import { CheckinService } from './checkin.service';
import { ClinicaService } from './clinica.service';
import { CriterioService } from './criterio.service';
import { CursoService } from './curso.service';
import { DiagnosticoService } from './diagnostico.service';
import { EixoService } from './eixo.service';
import { EmpregadoService } from './empregado.service';
import { EnfaseService } from './enfase.service';
import { EquipeService } from './equipe.service';
import { ExameService } from './exame.service';
import { FilaAtendimentoService } from './fila-atendimento.service';
import { FuncaoService } from './funcao.service';
import { GerenciaService } from './gerencia.service';
import { GheService } from './ghe.service';
import { GheeService } from './ghee.service';
import { GrupoMonitoramentoService } from './grupo-monitoramento.service';
import { GrupoPerguntaFichaColetaService } from './grupo-pergunta-ficha-coleta.service';
import { ImovelService } from './imovel.service';
import { IndicadorSastService } from './indicador-sast.service';
import { IntervencaoService } from './intervencao.service';
import { LocalizacaoService } from './localizacao.service';
import { MedidaCaseiraService } from './medida-caseira.service';
import { ParametroService } from './parametro.service';
import { PerfilService } from './perfil.service';
import { PerguntaFichaColetaService } from './pergunta-ficha-coleta.service';
import { ProfissiogramaService } from './profissiograma.service';
import { ProfissionalService } from './profissional.service';
import { QuestionarioService } from './questionario.service';
import { RegimeService } from './regime.service';
import { RegraAtendimentoService } from './regra-atendimento.service';
import { RequisitoAsoService } from './requisito-aso.service';
import { RiscoGheService } from './risco-ghe.service';
import { ServicoService } from './servico.service';
import { TarefaService } from './tarefa.service';
import { TipoGrupoMonitoramentoService } from './tipo-grupo-monitoramento.service';
import { UsuarioService } from './usuario.service';
import { UtilService } from './util.service';

@NgModule({
    providers: [
        AlimentoService,
        AtendimentoService,
        AvaliacaoAtendimentoService,
        AtividadeFisicaService,
        BaseService,
        CargoService,
        CidadeService,
        CheckinService,
        ClinicaService,
        CriterioService,
        CursoService,
        DiagnosticoService,
        EixoService,
        EmpregadoService,
        EnfaseService,
        EquipeService,
        ExameService,
        FilaAtendimentoService,
        FuncaoService,
        GerenciaService,
        GheService,
        GheeService,
        GrupoMonitoramentoService,
        GrupoPerguntaFichaColetaService,
        ImovelService,
        IndicadorSastService,
        IntervencaoService,
        LocalizacaoService,
        MedidaCaseiraService,
        ParametroService,
        PerfilService,
        PerguntaFichaColetaService,
        ProfissiogramaService,
        ProfissionalService,
        QuestionarioService,
        RegimeService,
        RegraAtendimentoService,
        RequisitoAsoService,
        RiscoGheService,
        ServicoService,
        TarefaService,
        TipoGrupoMonitoramentoService,
        UsuarioService,
        UtilService
    ]
})
export class ServiceModule { }
