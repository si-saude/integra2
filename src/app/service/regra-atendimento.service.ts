import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { EquipeService } from './equipe.service';
import { Equipe } from '../model/equipe.model';
import { RegraAtendimento } from '../model/regra-atendimento.model';
import { RegraAtendimentoFilter } from '../filter/regra-atendimento.filter';
import { RegraAtendimentoEquipe } from '../model/regra-atendimento-equipe.model';

@Injectable()
export class RegraAtendimentoService extends GenericService<RegraAtendimento, RegraAtendimentoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private equipeService: EquipeService) {
        super(http, 'regra-atendimento', router, dialogService, spinnerService);
    }

    initializeObject() {
        const r = new RegraAtendimento();
        r.$regraAtendimentoEquipes = new Array<RegraAtendimentoEquipe>();
        return r;
    }

    initializeFilter() {
        return new RegraAtendimentoFilter();
    }

    toObject(obj: any): RegraAtendimento {
        const regra: RegraAtendimento = new RegraAtendimento();
        regra.$id = obj['id'];
        regra.$nome = obj['nome'];
        regra.$version = obj['version'];
        regra.$regraAtendimentoEquipes = new Array<RegraAtendimentoEquipe>();
        if (obj['regraAtendimentoEquipes']) {
            for (let x = 0; x < obj['regraAtendimentoEquipes'].length; x++) {
                const regraAtendimentoEquipe: RegraAtendimentoEquipe
                    = this.toRegraAtendimentoEquipe(obj['regraAtendimentoEquipes'][x]);
                regraAtendimentoEquipe.$regraAtendimento.$id = regra.$id;
                regra.$regraAtendimentoEquipes.push(regraAtendimentoEquipe);
            }
        }
        return regra;
    }

    toRegraAtendimentoEquipe(obj: RegraAtendimentoEquipe): RegraAtendimentoEquipe{
        const regraAtendimentoEquipe: RegraAtendimentoEquipe = new RegraAtendimentoEquipe();
        regraAtendimentoEquipe.$id = obj['id'];
        regraAtendimentoEquipe.$regraAtendimento = new RegraAtendimento();
        regraAtendimentoEquipe.$acolhimento = obj['acolhimento'];
        regraAtendimentoEquipe.$ordem = obj['ordem'];
        regraAtendimentoEquipe.$version = obj['version'];

        if (this.helper.isNotNull(obj['equipe'])) {
            regraAtendimentoEquipe.$equipe = this.equipeService.toObject(obj['equipe']);
        }

        regraAtendimentoEquipe.$equipes = new Array<Equipe>();
        if (obj['equipes']) {
            for (let x = 0; x < obj['equipes'].length; x++) {
                const equipe: Equipe = this.equipeService.toObject(obj['equipes'][x]);
                regraAtendimentoEquipe.$equipes.push(equipe);
            }
        }

        return regraAtendimentoEquipe;
    }

    getEquipeService() {
        return this.equipeService;
    }
}
