import { NgModule } from '@angular/core';

import { BaseComponentModule } from './cadastro/base/base.component.module';
import { CargoComponentModule } from './cadastro/cargo/cargo.component.module';
import { CidadeComponentModule } from './cadastro/cidade/cidade.component.module';
import { ClinicaComponentModule } from './cadastro/clinica/clinica.component.module';
import { CriterioComponentModule } from './cadastro/criterio/criterio.component.module';
import { CursoComponentModule } from './cadastro/curso/curso.component.module';
import { DiagnosticoComponentModule } from './cadastro/diagnostico/diagnostico.component.module';
import { EixoComponentModule } from './cadastro/eixo/eixo.component.module';
import { EquipeComponentModule } from './cadastro/equipe/equipe.component.module';
import { ExameComponentModule } from './cadastro/exame/exame.component.module';
import { GerenciaComponentModule } from './cadastro/gerencia/gerencia.component.module';
import { GheComponentModule } from './cadastro/ghe/ghe.component.module';
import { ImovelComponentModule } from './cadastro/imovel/imovel.component.module';
import { IndicadorSastComponentModule } from './cadastro/indicador-sast/indicador-sast.component.module';
import { IntervencaoComponentModule } from './cadastro/intervencao/intervencao.component.module';
import { PerfilComponentModule } from './cadastro/perfil/perfil.component.module';
import { PerguntaFichaColetaComponentModule } from './cadastro/pergunta-ficha-coleta/pergunta-ficha-coleta.component.module';
import { RegraAtendimentoComponentModule } from './cadastro/regra-atendimento/regra-atendimento.component.module';
import { RiscoGheComponentModule } from './cadastro/risco-ghe/risco-ghe.component.module';
import { GrupoPerguntaFichaColetaComponentModule } from './cadastro/grupo-pergunta-ficha-coleta/grupo-pergunta-ficha-coleta.component.module';

@NgModule({
    imports: [
        BaseComponentModule,
        CargoComponentModule,
        CidadeComponentModule,
        ClinicaComponentModule,
        CriterioComponentModule,
        CursoComponentModule,
        DiagnosticoComponentModule,
        EixoComponentModule,
        EquipeComponentModule,
        ExameComponentModule,
        GerenciaComponentModule,
        GheComponentModule,
        GrupoPerguntaFichaColetaComponentModule,
        ImovelComponentModule,
        IndicadorSastComponentModule,
        IntervencaoComponentModule,
        PerfilComponentModule,
        PerguntaFichaColetaComponentModule,
        RegraAtendimentoComponentModule,
        RiscoGheComponentModule
    ]
})

export class ControllerModule { }
