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
import { GheComponentModule } from './cadastro/ghe/ghe.component.module';
import { ImovelComponentModule } from './cadastro/imovel/imovel.component.module';
import { IntervencaoComponentModule } from './cadastro/intervencao/intervencao.component.module';
import { PerfilComponentModule } from './cadastro/perfil/perfil.component.module';
import { RiscoGheComponentModule } from './cadastro/risco-ghe/risco-ghe.component.module';

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
        GheComponentModule,
        ImovelComponentModule,
        IntervencaoComponentModule,
        PerfilComponentModule,
        RiscoGheComponentModule
    ]
})

export class ControllerModule { }
