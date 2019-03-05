import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { GenericService } from '../generic/generic-service';
import { BooleanFilter } from '../generic/boolean-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { GrupoPerguntaFichaColetaService } from './grupo-pergunta-ficha-coleta.service';
import { UtilService } from './util.service';
import { EquipeService } from './equipe.service';
import { PerguntaFichaColeta } from '../model/pergunta-ficha-coleta.model';
import { PerguntaFichaColetaFilter } from '../filter/pergunta-ficha-coleta.filter';
import { ItemPerguntaFichaColeta } from '../model/item-pergunta-ficha-coleta.model';
import { Equipe } from '../model/equipe.model';

@Injectable()
export class PerguntaFichaColetaService extends GenericService<PerguntaFichaColeta, PerguntaFichaColetaFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private equipeService: EquipeService,
        private grupoPerguntaFichaColetaService: GrupoPerguntaFichaColetaService,
        private utilService: UtilService) {
        super(http, 'pergunta-ficha-coleta', router, dialogService, spinnerService);
    }

    initializeObject() {
        const p = new PerguntaFichaColeta();
        p.$itens = new Array<ItemPerguntaFichaColeta>();
        p.$equipes = new Array<Equipe>();
        return p;
    }

    initializeFilter() {
        const f = new PerguntaFichaColetaFilter();
        f.$grupo = this.grupoPerguntaFichaColetaService.initializeFilter();
        f.$inativo = new BooleanFilter();
        f.$obrigatorio = new BooleanFilter();
        return f;
    }

    toObject(obj: any): PerguntaFichaColeta {
        const pergunta: PerguntaFichaColeta = new PerguntaFichaColeta();
        pergunta.$id = obj['id'];
        pergunta.$codigo = obj['codigo'];
        pergunta.$descricao = obj['descricao'];
        pergunta.$inativo = obj['inativo'];
        pergunta.$obrigatorio = obj['obrigatorio'];
        pergunta.$path = obj['path'];
        pergunta.$tipo = obj['tipo'];
        pergunta.$version = obj['version'];
        pergunta.$itens = new Array<ItemPerguntaFichaColeta>();
        if (obj['itens']) {
            for (let x = 0; x < obj['itens'].length; x++) {
                const item: ItemPerguntaFichaColeta = this.toItem(obj['itens'][x]);
                item.$pergunta.$id = pergunta.$id;
                pergunta.$itens.push(item);
            }
        }
        pergunta.$equipes = new Array<Equipe>();
        if (obj['equipes']) {
            for (let x = 0; x < obj['equipes'].length; x++) {
                const equipe: Equipe = this.equipeService.toObject(obj['equipes'][x]);
                pergunta.$equipes.push(equipe);
            }
        }
        if (this.helper.isNotNull(obj['grupo'])) {
            pergunta.$grupo = this.grupoPerguntaFichaColetaService.toObject(obj['grupo']);
        }
        return pergunta;
    }

    toItem(obj: ItemPerguntaFichaColeta): ItemPerguntaFichaColeta {
        const item: ItemPerguntaFichaColeta = new ItemPerguntaFichaColeta();
        item.$id = obj['id'];
        item.$pergunta = new PerguntaFichaColeta();
        item.$path = obj['path'];
        item.$titulo = obj['titulo'];
        item.$ordem = obj['ordem'];
        item.$version = obj['version'];
        return item;
    }

    getGrupoPerguntaFichaColetaService() {
        return this.grupoPerguntaFichaColetaService;
    }

    getEquipeService() {
        return this.equipeService;
    }

    getUtilService() {
        return this.utilService;
    }
}
