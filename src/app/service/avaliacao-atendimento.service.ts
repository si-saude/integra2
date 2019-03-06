import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { AvaliacaoAtendimento } from '../model/avaliacao-atendimento.model';
import { ItemRespostaAvaliacaoAtendimento } from '../model/item-resposta-avaliacao-atendimento.model';
import { RespostaAvaliacaoAtendimento } from '../model/resposta-avaliacao-atendimento.model';
import { AvaliacaoAtendimentoFilter } from '../filter/avaliacao-atendimento.filter';
import { CheckinService } from './checkin.service';
import { QuestionarioService } from './questionario.service';
import { UtilService } from './util.service';

@Injectable()
export class AvaliacaoAtendimentoService extends GenericService<AvaliacaoAtendimento, AvaliacaoAtendimentoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private checkinService: CheckinService,
        private questionarioService: QuestionarioService, private utilService: UtilService) {
        super(http, 'avaliacao-atendimento', router, dialogService, spinnerService);
    }

    initializeObject() {
        const a = new AvaliacaoAtendimento();
        a.$respostas = new Array<RespostaAvaliacaoAtendimento>();
        return a;
    }

    initializeFilter() {
        const f = new AvaliacaoAtendimentoFilter();
        f.$checkin = this.checkinService.initializeFilter();
        f.$questionario = this.questionarioService.initializeFilter();
        return f;
    }

    transformFilter(filter: AvaliacaoAtendimentoFilter) {
        filter.$checkin = this.checkinService.transformDateFilter(filter.$checkin, 'chegada');
        return filter;
    }

    toObject(obj: any): AvaliacaoAtendimento {
        let avaliacao: AvaliacaoAtendimento = new AvaliacaoAtendimento();
        avaliacao.$id = obj['id'];
        avaliacao.$status = obj['status'];
        avaliacao.$version = obj['version'];

        if (this.helper.isNotNull(obj['checkin'])) {
            avaliacao.$checkin = this.checkinService.toObject(obj['checkin']);
        }

        if (this.helper.isNotNull(obj['questionario'])) {
            avaliacao.$questionario = this.questionarioService.toObject(obj['questionario']);
        }

        avaliacao.$respostas = new Array<RespostaAvaliacaoAtendimento>();
        if (obj['respostas']) {
            for (let x = 0; x < obj['respostas'].length; x++) {
                const resposta: RespostaAvaliacaoAtendimento = this.toResposta(obj['respostas'][x]);
                resposta.$avaliacao.$id = avaliacao.$id;
                avaliacao.$respostas.push(resposta);
            }
        }

        return avaliacao;
    }

    toResposta(obj: RespostaAvaliacaoAtendimento): RespostaAvaliacaoAtendimento {
        const resposta: RespostaAvaliacaoAtendimento = new RespostaAvaliacaoAtendimento();
        resposta.$id = obj['id'];
        resposta.$avaliacao = new AvaliacaoAtendimento();
        resposta.$codigo = obj['codigo'];
        resposta.$conteudo = obj['conteudo'];
        resposta.$version = obj['version'];

        if (this.helper.isNotNull(obj['questao'])) {
            resposta.$questao = this.questionarioService.toQuestao(obj['questao']);
        }

        resposta.$itens = new Array<ItemRespostaAvaliacaoAtendimento>();
        if (obj['itens']) {
            for (let x = 0; x < obj['itens'].length; x++) {
                const item: ItemRespostaAvaliacaoAtendimento = this.toItem(obj['itens'][x]);
                item.$resposta.$id = resposta.$id;
                resposta.$itens.push(item);
            }
        }

        return resposta;
    }

    toItem(obj: ItemRespostaAvaliacaoAtendimento): ItemRespostaAvaliacaoAtendimento {
        const item: ItemRespostaAvaliacaoAtendimento = new ItemRespostaAvaliacaoAtendimento();
        item.$id = obj['id'];
        item.$resposta = new RespostaAvaliacaoAtendimento();
        item.$conteudo = obj['conteudo'];
        item.$version = obj['version'];
        return item;
    }

    getCheckinService() {
        return this.checkinService;
    }

    getQuestionarioService() {
        return this.questionarioService;
    }

    getUtilService() {
        return this.utilService;
    }

    registrar(t: AvaliacaoAtendimento, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/registrar', t, { headers: this.getHeaders()}) ,
            (res) => {
                this.showMessage(res._body);
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }
}
