import { Routes } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';
import { DeactivateGuard } from './guard/deactivate.guard';
import { HomeComponent } from './home/home.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { NovaSenhaComponent } from './usuario/nova-senha/nova-senha.component';

import * as alimentoGuard from './guard/cadastro/alimento/alimento.guard';
import * as atividadeFisicaGuard from './guard/cadastro/atividade-fisica/atividade-fisica.guard';
import * as baseGuard from './guard/cadastro/base/base.guard';
import * as cargoGuard from './guard/cadastro/cargo/cargo.guard';
import * as cidadeGuard from './guard/cadastro/cidade/cidade.guard';
import * as clinicaGuard from './guard/cadastro/clinica/clinica.guard';
import * as criterioGuard from './guard/cadastro/criterio/criterio.guard';
import * as cursoGuard from './guard/cadastro/curso/curso.guard';
import * as diagnosticoGuard from './guard/cadastro/diagnostico/diagnostico.guard';
import * as eixoGuard from './guard/cadastro/eixo/eixo.guard';
import * as empregadoGuard from './guard/cadastro/empregado/empregado.guard';
import * as enfaseGuard from './guard/cadastro/enfase/enfase.guard';
import * as equipeGuard from './guard/cadastro/equipe/equipe.guard';
import * as exameGuard from './guard/cadastro/exame/exame.guard';
import * as funcaoGuard from './guard/cadastro/funcao/funcao.guard';
import * as gerenciaGuard from './guard/cadastro/gerencia/gerencia.guard';
import * as gheGuard from './guard/cadastro/ghe/ghe.guard';
import * as gheeGuard from './guard/cadastro/ghee/ghee.guard';
import * as grupoMonitoramentoGuard from './guard/cadastro/grupo-monitoramento/grupo-monitoramento.guard';
import * as grupoPerguntaFichaColetaGuard from './guard/cadastro/grupo-pergunta-ficha-coleta/grupo-pergunta-ficha-coleta.guard';
import * as imovelGuard from './guard/cadastro/imovel/imovel.guard';
import * as indicadorGuard from './guard/cadastro/indicador-sast/indicador-sast.guard';
import * as intervencaoGuard from './guard/cadastro/intervencao/intervencao.guard';
import * as localizacaoGuard from './guard/cadastro/localizacao/localizacao.guard';
import * as medidaCaseiraGuard from './guard/cadastro/medida-caseira/medida-caseira.guard';
import * as parametroGuard from './guard/cadastro/parametro/parametro.guard';
import * as perfilGuard from './guard/cadastro/perfil/perfil.guard';
import * as perguntaFichaColetaGuard from './guard/cadastro/pergunta-ficha-coleta/pergunta-ficha-coleta.guard';
import * as profissiogramaGuard from './guard/cadastro/profissiograma/profissiograma.guard';
import * as profissionalGuard from './guard/cadastro/profissional/profissional.guard';
import * as questionarioGuard from './guard/cadastro/questionario/questionario.guard';
import * as regimeGuard from './guard/cadastro/regime/regime.guard';
import * as regraAtendimentoGuard from './guard/cadastro/regra-atendimento/regra-atendimento.guard';
import * as requisitoAso from './guard/cadastro/requisito-aso/requisito-aso.guard';
import * as riscoGheGuard from './guard/cadastro/risco-ghe/risco-ghe.guard';
import * as servicoGuard from './guard/cadastro/servico/servico.guard';
import * as tipoGrupoMonitoramento from './guard/cadastro/tipo-grupo-monitoramento/tipo-grupo-monitoramento.guard';

import * as atendimento from './guard/processo/atendimento/atendimento.guard';
import * as avaliacaoAtendimento from './guard/processo/avaliacao-atendimento/avaliacao-atendimento.guard';
import * as checkin from './guard/processo/checkin/checkin.guard';
import * as solicitacao from './guard/processo/solicitacao/solicitacao.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {
        path: 'login', component: UsuarioComponent,
        children: [{ path: '', component: LoginComponent }]
    },
    {
        path: 'nova-senha', component: UsuarioComponent,
        children: [{ path: '', component: NovaSenhaComponent }]
    },
    alimentoGuard.Routing.route(HomeComponent),
    atividadeFisicaGuard.Routing.route(HomeComponent),
    baseGuard.Routing.route(HomeComponent),
    cargoGuard.Routing.route(HomeComponent),
    cidadeGuard.Routing.route(HomeComponent),
    clinicaGuard.Routing.route(HomeComponent),
    criterioGuard.Routing.route(HomeComponent),
    cursoGuard.Routing.route(HomeComponent),
    diagnosticoGuard.Routing.route(HomeComponent),
    eixoGuard.Routing.route(HomeComponent),
    empregadoGuard.Routing.route(HomeComponent),
    enfaseGuard.Routing.route(HomeComponent),
    equipeGuard.Routing.route(HomeComponent),
    exameGuard.Routing.route(HomeComponent),
    funcaoGuard.Routing.route(HomeComponent),
    gerenciaGuard.Routing.route(HomeComponent),
    gheGuard.Routing.route(HomeComponent),
    gheeGuard.Routing.route(HomeComponent),
    grupoMonitoramentoGuard.Routing.route(HomeComponent),
    grupoPerguntaFichaColetaGuard.Routing.route(HomeComponent),
    imovelGuard.Routing.route(HomeComponent),
    indicadorGuard.Routing.route(HomeComponent),
    intervencaoGuard.Routing.route(HomeComponent),
    localizacaoGuard.Routing.route(HomeComponent),
    medidaCaseiraGuard.Routing.route(HomeComponent),
    parametroGuard.Routing.route(HomeComponent),
    perfilGuard.Routing.route(HomeComponent),
    perguntaFichaColetaGuard.Routing.route(HomeComponent),
    profissiogramaGuard.Routing.route(HomeComponent),
    profissionalGuard.Routing.route(HomeComponent),
    questionarioGuard.Routing.route(HomeComponent),
    regimeGuard.Routing.route(HomeComponent),
    regraAtendimentoGuard.Routing.route(HomeComponent),
    requisitoAso.Routing.route(HomeComponent),
    riscoGheGuard.Routing.route(HomeComponent),
    servicoGuard.Routing.route(HomeComponent),
    tipoGrupoMonitoramento.Routing.route(HomeComponent),

    atendimento.Routing.route(HomeComponent),
    avaliacaoAtendimento.Routing.route(HomeComponent),
    checkin.Routing.route(HomeComponent),
    solicitacao.Routing.route(HomeComponent),
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
