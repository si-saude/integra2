import { NgModule } from '@angular/core';

import { AlimentoService } from './alimento.service';
import { AtividadeFisicaService } from './atividade-fisica.service';
import { BaseService } from './base.service';
import { CargoService } from './cargo.service';
import { CidadeService } from './cidade.service';
import { ClinicaService } from './clinica.service';
import { CriterioService } from './criterio.service';
import { CursoService } from './curso.service';
import { DiagnosticoService } from './diagnostico.service';
import { EixoService } from './eixo.service';
import { EnfaseService } from './enfase.service';
import { EquipeService } from './equipe.service';
import { ExameService } from './exame.service';
import { FuncaoService } from './funcao.service';
import { GerenciaService } from './gerencia.service';
import { GheService } from './ghe.service';
import { GrupoPerguntaFichaColetaService } from './grupo-pergunta-ficha-coleta.service';
import { ImovelService } from './imovel.service';
import { IndicadorSastService } from './indicador-sast.service';
import { IntervencaoService } from './intervencao.service';
import { MedidaCaseiraService } from './medida-caseira.service';
import { PerfilService } from './perfil.service';
import { PerguntaFichaColetaService } from './pergunta-ficha-coleta.service';
import { RegimeService } from './regime.service';
import { RegraAtendimentoService } from './regra-atendimento.service';
import { RiscoGheService } from './risco-ghe.service';
import { ServicoService } from './servico.service';
import { UsuarioService } from './usuario.service';
import { UtilService } from './util.service';

@NgModule({
    providers: [
        AlimentoService,
        AtividadeFisicaService,
        BaseService,
        CargoService,
        CidadeService,
        ClinicaService,
        CriterioService,
        CursoService,
        DiagnosticoService,
        EixoService,
        EnfaseService,
        EquipeService,
        ExameService,
        FuncaoService,
        GerenciaService,
        GheService,
        GrupoPerguntaFichaColetaService,
        ImovelService,
        IndicadorSastService,
        IntervencaoService,
        MedidaCaseiraService,
        PerfilService,
        PerguntaFichaColetaService,
        RegimeService,
        RegraAtendimentoService,
        RiscoGheService,
        ServicoService,
        UsuarioService,
        UtilService
    ]
})
export class ServiceModule { }
