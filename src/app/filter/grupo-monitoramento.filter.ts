import { GenericFilter } from './../generic/generic-filter';
import { BooleanFilter } from './../generic/boolean-filter';

import { TipoGrupoMonitoramentoFilter } from './tipo-grupo-monitoramento.filter';

export class GrupoMonitoramentoFilter extends GenericFilter {
    private nome: string;
    private tipoGrupoMonitoramento: TipoGrupoMonitoramentoFilter;
    private recorrente: BooleanFilter;
    private relatorio: BooleanFilter;
    private auditoriaAso: BooleanFilter;

    public get $nome(): string {
        return this.nome;
    }

    public get $tipoGrupoMonitoramento(): TipoGrupoMonitoramentoFilter {
        return this.tipoGrupoMonitoramento;
    }

    public get $recorrente(): BooleanFilter {
        return this.recorrente;
    }

    public get $relatorio(): BooleanFilter {
        return this.relatorio;
    }

    public get $auditoriaAso(): BooleanFilter {
        return this.auditoriaAso;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $tipoGrupoMonitoramento(value: TipoGrupoMonitoramentoFilter) {
        this.tipoGrupoMonitoramento = value;
    }

    public set $recorrente(value: BooleanFilter) {
        this.recorrente = value;
    }

    public set $relatorio(value: BooleanFilter) {
        this.relatorio = value;
    }

    public set $auditoriaAso(value: BooleanFilter) {
        this.auditoriaAso = value;
    }
}
