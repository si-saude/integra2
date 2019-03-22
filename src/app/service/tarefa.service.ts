import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DateFilter } from './../generic/date-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Agenda } from '../dto/agenda.dto';
import { Tarefa } from '../model/tarefa.model';
import { TempoAtendimento } from '../dto/tempo-atendimento.dto';
import { TarefaFilter } from '../filter/tarefa.filter';
import { EquipeService } from './equipe.service';
import { EmpregadoService } from './empregado.service';
import { ProfissionalService } from './profissional.service';
import { ServicoService } from './servico.service';
import { UtilService } from './util.service';

@Injectable()
export class TarefaService extends GenericService<Tarefa, TarefaFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private equipeService: EquipeService,
        private empregadoService: EmpregadoService, private profissionalService: ProfissionalService,
        private servicoService: ServicoService, private utilService: UtilService) {
        super(http, 'tarefa', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Tarefa();
    }

    initializeFilter() {
        const t = new TarefaFilter();
        t.$cliente = this.empregadoService.initializeFilter();
        t.$equipe = this.equipeService.initializeFilter();
        t.$responsavel = this.profissionalService.initializeFilter();
        t.$servico = this.servicoService.initializeFilter();
        t.$inicio = new DateFilter();
        t.$fim = new DateFilter();
        return t;
    }

    transformFilter(filter: TarefaFilter) {
        filter = this.transformDateFilter(filter, 'inicio');
        filter = this.transformDateFilter(filter, 'fim');
        return filter;
    }

    toObject(obj: any): Tarefa {
        let tarefa: Tarefa = new Tarefa();
        tarefa.$id = obj['id'];
        tarefa.$status = obj['status'];
        tarefa.$version = obj['version'];

        tarefa = this.transformDate(obj, tarefa, 'atualizacao');
        tarefa = this.transformDate(obj, tarefa, 'inicio');
        tarefa = this.transformDate(obj, tarefa, 'fim');

        if (this.helper.isNotNull(obj['cliente'])) {
            tarefa.$cliente = this.empregadoService.toObject(obj['cliente']);
        }

        if (this.helper.isNotNull(obj['equipe'])) {
            tarefa.$equipe = this.equipeService.toObject(obj['equipe']);
        }

        if (this.helper.isNotNull(obj['responsavel'])) {
            tarefa.$responsavel = this.profissionalService.toObject(obj['responsavel']);
        }

        if (this.helper.isNotNull(obj['servico'])) {
            tarefa.$servico = this.servicoService.toObject(obj['servico']);
        }

        return tarefa;
    }

    toAgenda(obj: any): Agenda {
        let agenda: Agenda = new Agenda();
        agenda.$cliente = obj['cliente'];
        agenda.$servico = obj['servico'];
        agenda.$equipes = obj['equipes'];
        agenda.$status = obj['status'];
        agenda = this.transformDate(obj, agenda, 'data');
        return agenda;
    }

    toAgendas(objs: any): Array<Agenda> {
        const array: Array<Agenda> = new Array<Agenda>();
        for (let x = 0; x < objs.length; x++) {
            array.push(this.toAgenda(objs[x]));
        }
        return array;
    }

    toTempoAtendimento(obj: any): TempoAtendimento {
        let tempoAtendimento: TempoAtendimento = new TempoAtendimento();
        tempoAtendimento.$empregado = obj['empregado'];
        tempoAtendimento.$profissional = obj['profissional'];
        tempoAtendimento.$equipe = obj['equipe'];
        tempoAtendimento.$status = obj['status'];

        tempoAtendimento = this.transformDate(obj, tempoAtendimento, 'inicio');
        tempoAtendimento = this.transformDate(obj, tempoAtendimento, 'fim');
        tempoAtendimento = this.transformDate(obj, tempoAtendimento, 'duracao');
        tempoAtendimento = this.transformDate(obj, tempoAtendimento, 'chegada');
        tempoAtendimento = this.transformDate(obj, tempoAtendimento, 'saida');
        tempoAtendimento = this.transformDate(obj, tempoAtendimento, 'tempoTotal');
        return tempoAtendimento;
    }

    toTempoAtendimentos(objs: any): Array<TempoAtendimento> {
        const array: Array<TempoAtendimento> = new Array<TempoAtendimento>();
        for (let x = 0; x < objs.length; x++) {
            array.push(this.toTempoAtendimento(objs[x]));
        }
        return array;
    }

    public getEmpregadoService(): EmpregadoService {
        return this.empregadoService;
    }

    public getEquipeService(): EquipeService {
        return this.equipeService;
    }

    public getProfissionalService(): ProfissionalService {
        return this.profissionalService;
    }

    public getServicoService(): ServicoService {
        return this.servicoService;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }

    registrar(t: Tarefa, fThen: any, fCatch: any) {
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

    reportAgenda(f: TarefaFilter, fThen: any, fCatch: any) {
        this.showSpinner();
        f = this.transformFilter(f);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/report-agenda', f, { headers: this.getHeaders()}) ,
            (res) => {
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }

    reportTempoAtendimento(f: TarefaFilter, fThen: any, fCatch: any) {
        this.showSpinner();
        f = this.transformFilter(f);
        this.toPromise(this.http.post(this.rootUrl + this.path + '/report-tempo-atendimento', f, { headers: this.getHeaders()}) ,
            (res) => {
                if (fThen) {
                    fThen(res);
                }
            }, fCatch, undefined);
    }
}
