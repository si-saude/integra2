import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { TipoGrupoMonitoramento } from '../model/tipo-grupo-monitoramento.model';
import { TipoGrupoMonitoramentoFilter } from '../filter/tipo-grupo-monitoramento.filter';
import { UtilService } from './util.service';

@Injectable()
export class TipoGrupoMonitoramentoService extends GenericService<TipoGrupoMonitoramento, TipoGrupoMonitoramentoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService) {
        super(http, 'tipo-grupo-monitoramento', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new TipoGrupoMonitoramento();
    }

    initializeFilter() {
        return new TipoGrupoMonitoramentoFilter();
    }

    toObject(obj: any): TipoGrupoMonitoramento {
        const tipoGrupoMonitoramento: TipoGrupoMonitoramento = new TipoGrupoMonitoramento();

        tipoGrupoMonitoramento.$id = obj['id'];
        tipoGrupoMonitoramento.$nome = obj['nome'];
        tipoGrupoMonitoramento.$descricao = obj['descricao'];
        tipoGrupoMonitoramento.$version = obj['version'];

        return tipoGrupoMonitoramento;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}