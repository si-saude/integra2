import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Tarefa } from '../model/tarefa.model';
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
        return t;
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
}
