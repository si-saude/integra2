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

    getAbrangencia(filter: string, fThen: any, fCatch: any) {
        this.genericGet('abrangencia', filter, fThen, fCatch);
    }

    getAptidaoCardiorrespiratoria(filter: string, fThen: any, fCatch: any) {
        this.genericGet('aptidao-cardiorrespiratoria', filter, fThen, fCatch);
    }

    getAptidaoFisicaBrigadista(filter: string, fThen: any, fCatch: any) {
        this.genericGet('aptidao-fisica-brigadista', filter, fThen, fCatch);
    }

    getAutoavaliacaoHabitosAlimentares(filter: string, fThen: any, fCatch: any) {
        this.genericGet('getAutoavaliacaoHabitosAlimentares', filter, fThen, fCatch);
    }

    getDireitoEsquerdo(filter: string, fThen: any, fCatch: any) {
        this.genericGet('direito-esquerdo', filter, fThen, fCatch);
    }

    getDoresCorporais(filter: string, fThen: any, fCatch: any) {
        this.genericGet('dores-corporais', filter, fThen, fCatch);
    }

    getEscolaridade(filter: string, fThen: any, fCatch: any) {
        this.genericGet('escolaridade', filter, fThen, fCatch);
    }

    getEstadoCivil(filter: string, fThen: any, fCatch: any) {
        this.genericGet('estado-civil', filter, fThen, fCatch);
    }

    getExposicaoRiscosAmbientais(filter: string, fThen: any, fCatch: any) {
        this.genericGet('exposicao-riscos-ambientais', filter, fThen, fCatch);
    }

    getFlexibilidade(filter: string, fThen: any, fCatch: any) {
        this.genericGet('flexibilidade', filter, fThen, fCatch);
    }

    getForcaAbdominal(filter: string, fThen: any, fCatch: any) {
        this.genericGet('forca-abdominal', filter, fThen, fCatch);
    }

    getForcaPreensaoManual(filter: string, fThen: any, fCatch: any) {
        this.genericGet('forca-prenssao-manual', filter, fThen, fCatch);
    }

    getFuma(filter: string, fThen: any, fCatch: any) {
        this.genericGet('fuma', filter, fThen, fCatch);
    }

    getFumaClassificacao(filter: string, fThen: any, fCatch: any) {
        this.genericGet('fuma-classificacao', filter, fThen, fCatch);
    }

    getGrupoServico(filter: string, fThen: any, fCatch: any) {
        this.genericGet('grupo-servico', filter, fThen, fCatch);
    }

    getIntensidade(filter: string, fThen: any, fCatch: any) {
        this.genericGet('intensidade', filter, fThen, fCatch);
    }

    getNivelAtividadeFisica(filter: string, fThen: any, fCatch: any) {
        this.genericGet('nivel-atividade-fisica', filter, fThen, fCatch);
    }

    getOperador(filter: string, fThen: any, fCatch: any) {
        this.genericGet('operador', filter, fThen, fCatch);
    }

    getPartesCorpo(filter: string, fThen: any, fCatch: any) {
        this.genericGet('partes-corpo', filter, fThen, fCatch);
    }

    getRefereQualidadeAgua(filter: string, fThen: any, fCatch: any) {
        this.genericGet('refere-qualidade-agua', filter, fThen, fCatch);
    }

    getSexo(filter: string, fThen: any, fCatch: any) {
        this.genericGet('sexo', filter, fThen, fCatch);
    }

    getStatusAvaliacaoAtendimento(filter: string, fThen: any, fCatch: any) {
        this.genericGet('status-avaliacao-atendimento', filter, fThen, fCatch);
    }

    getStatusCheckin(filter: string, fThen: any, fCatch: any) {
        this.genericGet('status-checkin', filter, fThen, fCatch);
    }

    getStatusEmpregado(filter: string, fThen: any, fCatch: any) {
        this.genericGet('status-empregado', filter, fThen, fCatch);
    }

    getStatusTarefa(filter: string, fThen: any, fCatch: any) {
        this.genericGet('status-tarefa', filter, fThen, fCatch);
    }

    getSimNao(filter: string, fThen: any, fCatch: any) {
        this.genericGet('sim-nao', filter, fThen, fCatch);
    }

    getTempoAnos(filter: string, fThen: any, fCatch: any) {
        this.genericGet('tempo-anos', filter, fThen, fCatch);
    }

    getTempoMeses(filter: string, fThen: any, fCatch: any) {
        this.genericGet('tempo-meses', filter, fThen, fCatch);
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
