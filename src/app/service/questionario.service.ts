import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { GenericService } from '../generic/generic-service';
import { BooleanFilter } from '../generic/boolean-filter';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Questionario } from '../model/questionario.model';
import { QuestionarioFilter } from '../filter/questionario.filter';
import { Alternativa } from '../model/alternativa.model';
import { Questao } from '../model/questao.model';
import { UtilService } from './util.service';

@Injectable()
export class QuestionarioService extends GenericService<Questionario, QuestionarioFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService) {
        super(http, 'questionario', router, dialogService, spinnerService);
    }

    initializeObject() {
        const q = new Questionario();
        q.$questoes = new Array<Questao>();
        return q;
    }

    initializeFilter() {
        const q = new QuestionarioFilter();
        q.$inativo = new BooleanFilter();
        return q;
    }

    toObject(obj: any): Questionario {
        const questionario: Questionario = new Questionario();
        questionario.$id = obj['id'];
        questionario.$inativo = obj['inativo'];
        questionario.$nome = obj['nome'];
        questionario.$tipo = obj['tipo'];
        questionario.$version = obj['version'];
        questionario.$questoes = new Array<Questao>();
        if (obj['questoes']) {
            for (let x = 0; x < obj['questoes'].length; x++) {
                const questao: Questao = this.toQuestao(obj['questoes'][x]);
                questao.$questionario.$id = questionario.$id;
                questionario.$questoes.push(questao);
            }
        }
        return questionario;
    }

    toQuestao(obj: Questao): Questao {
        const questao: Questao = new Questao();
        questao.$id = obj['id'];
        questao.$questionario = new Questionario();
        questao.$codigo = obj['codigo'];
        questao.$codigoAnterior = obj['codigoAnterior'];
        questao.$codigoProximo = obj['codigoProximo'];
        questao.$tipo = obj['tipo'];
        questao.$titulo = obj['titulo'];
        questao.$version = obj['version'];

        questao.$alternativas = new Array<Alternativa>();
        if (obj['alternativas']) {
            for (let x = 0; x < obj['alternativas'].length; x++) {
                const alternativa: Alternativa = this.toAlternativa(obj['alternativas'][x]);
                alternativa.$questao.$id = questao.$id;
                questao.$alternativas.push(alternativa);
            }
        }

        return questao;
    }

    toAlternativa(obj: Alternativa): Alternativa {
        const alternativa: Alternativa = new Alternativa();
        alternativa.$id = obj['id'];
        alternativa.$questao = new Questao();
        alternativa.$codigo = obj['codigo'];
        alternativa.$codigoAnterior = obj['codigoAnterior'];
        alternativa.$codigoProximo = obj['codigoProximo'];
        alternativa.$titulo = obj['titulo'];
        alternativa.$version = obj['version'];
        return alternativa;
    }

    getUtilService() {
        return this.utilService;
    }
}
