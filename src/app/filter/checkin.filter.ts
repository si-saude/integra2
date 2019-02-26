import { DateFilter } from './../generic/date-filter';
import { GenericFilter } from './../generic/generic-filter';

import { EmpregadoFilter } from './empregado.filter';
import { LocalizacaoFilter } from './localizacao.filter';
import { ServicoFilter } from './servico.filter';

export class CheckinFilter extends GenericFilter {
    private status: string;
    private chegada: DateFilter;
    private empregado: EmpregadoFilter;
    private localizacao: LocalizacaoFilter;
    private servico: ServicoFilter;

    public get $status(): string {
        return this.status;
    }

    public get $chegada(): DateFilter {
        return this.chegada;
    }

    public get $servico(): ServicoFilter {
        return this.servico;
    }

    public get $localizacao(): LocalizacaoFilter {
        return this.localizacao;
    }

    public get $empregado(): EmpregadoFilter {
        return this.empregado;
    }

    public set $status(value: string) {
        this.status = value;
    }

    public set $empregado(value: EmpregadoFilter) {
        this.empregado = value;
    }

    public set $localizacao(value: LocalizacaoFilter) {
        this.localizacao = value;
    }

    public set $servico(value: ServicoFilter) {
        this.servico = value;
    }

    public set $chegada(value: DateFilter) {
        this.chegada = value;
    }
}
