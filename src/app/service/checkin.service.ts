import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DateFilter } from './../generic/date-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Checkin } from '../model/checkin.model';
import { DetalheRespostaFichaColeta } from '../model/detalhe-resposta-ficha-coleta.model';
import { ItemRespostaFichaColeta } from '../model/item-resposta-ficha-coleta.model';
import { RespostaFichaColeta } from '../model/resposta-ficha-coleta.model';
import { Tarefa } from '../model/tarefa.model';
import { CheckinFilter } from '../filter/checkin.filter';
import { EmpregadoService } from './empregado.service';
import { LocalizacaoService } from './localizacao.service';
import { PerguntaFichaColetaService } from './pergunta-ficha-coleta.service';
import { ServicoService } from './servico.service';
import { TarefaService } from './tarefa.service';
import { UtilService } from './util.service';
import { ParametroService } from './parametro.service';

@Injectable()
export class CheckinService extends GenericService<Checkin, CheckinFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private empregadoService: EmpregadoService,
        private servicoService: ServicoService, private localizacaoService: LocalizacaoService,
        private tarefaService: TarefaService, private perguntaService: PerguntaFichaColetaService,
        private parametroService: ParametroService, private utilService: UtilService) {
        super(http, 'checkin', router, dialogService, spinnerService);
    }

    initializeObject() {
        const checkin: Checkin = new Checkin();
        checkin.$tarefas = new Array<Tarefa>();
        checkin.$respostas = new Array<RespostaFichaColeta>();
        return checkin;
    }

    initializeFilter() {
        const f = new CheckinFilter();
        f.$chegada = new DateFilter();
        f.$empregado = this.empregadoService.initializeFilter();
        f.$localizacao = this.localizacaoService.initializeFilter();
        f.$servico = this.servicoService.initializeFilter();
        return f;
    }

    transformFilter(filter: CheckinFilter) {
        filter = this.transformDateFilter(filter, 'chegada');
        return filter;
    }

    toObject(obj: any): Checkin {
        let checkin: Checkin = new Checkin();
        checkin.$id = obj['id'];
        checkin.$status = obj['status'];
        checkin.$conduta = obj['conduta'];
        checkin.$version = obj['version'];

        checkin = this.transformDate(obj, checkin, 'atualizacao');
        checkin = this.transformDate(obj, checkin, 'chegada');

        if (this.helper.isNotNull(obj['empregado'])) {
            checkin.$empregado = this.empregadoService.toObject(obj['empregado']);
        }

        if (this.helper.isNotNull(obj['servico'])) {
            checkin.$servico = this.servicoService.toObject(obj['servico']);
        }

        if (this.helper.isNotNull(obj['localizacao'])) {
            checkin.$localizacao = this.localizacaoService.toObject(obj['localizacao']);
        }

        checkin.$tarefas = new Array<Tarefa>();
        if (obj['tarefas']) {
            for (let x = 0; x < obj['tarefas'].length; x++) {
                const tarefa: Tarefa = this.tarefaService.toObject(obj['tarefas'][x]);
                checkin.$tarefas.push(tarefa);
            }
        }

        checkin.$respostas = new Array<RespostaFichaColeta>();
        if (obj['respostas']) {
            for (let x = 0; x < obj['respostas'].length; x++) {
                const resposta: RespostaFichaColeta = this.toResposta(obj['respostas'][x]);
                checkin.$respostas.push(resposta);
            }
        }

        return checkin;
    }

    toResposta(obj: RespostaFichaColeta): RespostaFichaColeta{
        const resposta: RespostaFichaColeta = new RespostaFichaColeta();
        resposta.$id = obj['id'];
        resposta.$checkin = new Checkin();
        resposta.$codigo = obj['codigo'];
        resposta.$conteudo = obj['conteudo'];
        resposta.$version = obj['version'];
        
        if (this.helper.isNotNull(obj['pergunta'])) {
            resposta.$pergunta = this.perguntaService.toObject(obj['pergunta']);
        }

        resposta.$itens = new Array<ItemRespostaFichaColeta>();
        if (obj['itens']) {
            for (let x = 0; x < obj['itens'].length; x++) {
                const item: ItemRespostaFichaColeta = this.toItem(obj['itens'][x]);
                item.$resposta.$id = resposta.$id;
                resposta.$itens.push(item);
            }
        }
        
        return resposta;
    }

    toItem(obj: ItemRespostaFichaColeta): ItemRespostaFichaColeta{
        const item: ItemRespostaFichaColeta = new ItemRespostaFichaColeta();
        item.$id = obj['id'];
        item.$resposta = new RespostaFichaColeta();
        item.$version = obj['version'];

        item.$detalhes = new Array<DetalheRespostaFichaColeta>();
        if (obj['detalhes']) {
            for (let x = 0; x < obj['detalhes'].length; x++) {
                const detalhe: DetalheRespostaFichaColeta = this.toDetalhe(obj['detalhes'][x]);
                detalhe.$item.$id = item.$id;
                item.$detalhes.push(detalhe);
            }
        }
        return item;
    }

    toDetalhe(obj: DetalheRespostaFichaColeta): DetalheRespostaFichaColeta{
        const detalhe: DetalheRespostaFichaColeta = new DetalheRespostaFichaColeta();
        detalhe.$id = obj['id'];
        detalhe.$item = new ItemRespostaFichaColeta();
        detalhe.$conteudo = obj['conteudo'];
        detalhe.$ordem = obj['ordem'];
        detalhe.$version = obj['version'];
        return detalhe;
    }

    getEmpregadoService() {
        return this.empregadoService;
    }

    getLocalizacaoService() {
        return this.localizacaoService;
    }

    getPerguntaFichaColetaService() {
        return this.perguntaService;
    }

    getServicoService() {
        return this.servicoService;
    }

    getTarefaService() {
        return this.tarefaService;
    }

    getParametroService() {
        return this.parametroService;
    }

    getUtilService() {
        return this.utilService;
    }

    registrar(t: Checkin, fThen: any, fCatch: any) {
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

    checkOut(t: Checkin, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/checkOut', t, { headers: this.getHeaders()}) ,
            (res) => {
                this.showMessage(res._body);
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }
}
