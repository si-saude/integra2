import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { GenericFilter } from '../generic/generic-filter';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

@Injectable()
export class UtilService extends GenericService<Object, GenericFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService) {
        super(http, 'generic', router, dialogService, spinnerService);
    }

    initializeObject() {
        return new Object();
    }

    initializeFilter() {
        return new GenericFilter();
    }

    toObject(obj: any): Object {
        return this.initializeObject();
    }

    getEscolaridade(filter: string, fThen: any, fCatch: any) {
        this.genericGet('escolaridade', filter, fThen, fCatch);
    }

    getEstadoCivil(filter: string, fThen: any, fCatch: any) {
        this.genericGet('estado-civil', filter, fThen, fCatch);
    }

    getGrupoServico(filter: string, fThen: any, fCatch: any) {
        this.genericGet('grupo-servico', filter, fThen, fCatch);
    }

    getOperador(filter: string, fThen: any, fCatch: any) {
        this.genericGet('operador', filter, fThen, fCatch);
    }

    getSexo(filter: string, fThen: any, fCatch: any) {
        this.genericGet('sexo', filter, fThen, fCatch);
    }

    getStatusEmpregado(filter: string, fThen: any, fCatch: any) {
        this.genericGet('status-empregado', filter, fThen, fCatch);
    }

    getTipoCriterio(filter: string, fThen: any, fCatch: any) {
        this.genericGet('tipo-criterio', filter, fThen, fCatch);
    }

    getTipoPerguntaFichaColeta(filter: string, fThen: any, fCatch: any) {
        this.genericGet('tipo-pergunta-ficha-coleta', filter, fThen, fCatch);
    }

    getTypeFilter(filter: string, fThen: any, fCatch: any) {
        this.genericGet('type-filter', filter, fThen, fCatch);
    }

    getTipoAlimento(filter: string, fThen: any, fCatch: any) {
        this.genericGet('tipo-alimento', filter, fThen, fCatch);
    }

    getTipoQuestao(filter: string, fThen: any, fCatch: any) {
        this.genericGet('tipo-questao', filter, fThen, fCatch);
    }

    getTipoQuestionario(filter: string, fThen: any, fCatch: any) {
        this.genericGet('tipo-questionario', filter, fThen, fCatch);
    }

    getUf(filter: string, fThen: any, fCatch: any) {
        this.genericGet('uf', filter, fThen, fCatch);
    }

    getVinculoEmpregado(filter: string, fThen: any, fCatch: any) {
        this.genericGet('vinculo-empregado', filter, fThen, fCatch);
    }
    private genericGet(path: string, filter: string, fThen: any, fCatch: any) {
        this.toPromise(this.http.get(this.rootUrl + this.path + '/' + path + '?filter=' + filter, { headers: this.getHeaders() }  ),
            function (res) {
                if (fThen) {
                    fThen(res.json());
                }
            }, fCatch, undefined);
    }
}
