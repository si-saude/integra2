import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Atendimento } from '../model/atendimento.model';
import { AtendimentoFilter } from '../filter/atendimento.filter';
import { FilaAtendimentoService } from './fila-atendimento.service';
import { TarefaService } from './tarefa.service';

@Injectable()
export class AtendimentoService extends GenericService<Atendimento, AtendimentoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private tarefaService: TarefaService,
        private filaService: FilaAtendimentoService) {
        super(http, 'atendimento', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Atendimento();
    }

    initializeFilter() {
        const a = new AtendimentoFilter();
        a.$tarefa = this.tarefaService.initializeFilter();
        return a;
    }

    toObject(obj: any): Atendimento {
        const atendimento: Atendimento = new Atendimento();
        atendimento.$id = obj['id'];
        atendimento.$version = obj['version'];

        if (this.helper.isNotNull(obj['tarefa'])) {
            atendimento.$tarefa = this.tarefaService.toObject(obj['tarefa']);
        }

        if (this.helper.isNotNull(obj['fila'])) {
            atendimento.$fila = this.filaService.toObject(obj['fila']);
        }

        return atendimento;
    }

    public getFilaAtendimentoService(): FilaAtendimentoService {
        return this.filaService;
    }

    public getTarefaService(): TarefaService {
        return this.tarefaService;
    }
}
