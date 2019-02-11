import { NgModule } from '@angular/core';

import { BaseService } from './base.service';
import { CargoService } from './cargo.service';
import { CidadeService } from './cidade.service';
import { ClinicaService } from './clinica.service';
import { CriterioService } from './criterio.service';
import { CursoService } from './curso.service';
import { DiagnosticoService } from './diagnostico.service';
import { EixoService } from './eixo.service';
import { EquipeService } from './equipe.service';
import { ExameService } from './exame.service';
import { GerenciaService } from './gerencia.service';
import { GheService } from './ghe.service';
import { ImovelService } from './imovel.service';
import { IndicadorSastService } from './indicador-sast.service';
import { IntervencaoService } from './intervencao.service';
import { PerfilService } from './perfil.service';
import { PerguntaFichaColetaService } from './pergunta-ficha-coleta.service';
import { RiscoGheService } from './risco-ghe.service';
import { GrupoPerguntaFichaColetaService } from './grupo-pergunta-ficha-coleta.service';
import { UsuarioService } from './usuario.service';
import { UtilService } from './util.service';

@NgModule({
    providers: [
        BaseService,
        CargoService,
        CidadeService,
        ClinicaService,
        CriterioService,
        CursoService,
        DiagnosticoService,
        EixoService,
        EquipeService,
        ExameService,
        GerenciaService,
        GheService,
        GrupoPerguntaFichaColetaService,
        ImovelService,
        IndicadorSastService,
        IntervencaoService,
        PerfilService,
        PerguntaFichaColetaService,
        RiscoGheService,
        UsuarioService,
        UtilService
    ]
})
export class ServiceModule { }
