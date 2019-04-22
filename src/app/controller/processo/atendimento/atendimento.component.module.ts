import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared.module';
import { AtendimentoAtividadeFisicaValidator } from './atendimento-atividade-fisica.validator';
import { CriarAtendimentoAvulsoValidator } from './criar-atendimento-avulso.validator';
import { FichaColetaValidator } from './ficha-coleta.validator';
import * as atendimento from './atendimento.component';

@NgModule({
    declarations: [
        atendimento.AtendimentoComponent
    ],
imports: [
    SharedModule
],
providers: [ AtendimentoAtividadeFisicaValidator, FichaColetaValidator, CriarAtendimentoAvulsoValidator ]})
export class AtendimentoComponentModule { }
