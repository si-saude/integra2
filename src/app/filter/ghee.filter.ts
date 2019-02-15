import { GenericFilter } from './../generic/generic-filter';
import { DateFilter } from './../generic/date-filter';

export class GheeFilter extends GenericFilter {
    private nome: string;
    private codigo: string;
    private dataCriacao: DateFilter;
    private dataDesativacao: DateFilter;

    public get $nome(): string {
        return this.nome;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $dataCriacao(): DateFilter {
        return this.dataCriacao;
    }

    public get $dataDesativacao(): DateFilter {
        return this.dataDesativacao;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $dataCriacao(value: DateFilter) {
        this.dataCriacao = value;
    }

    public set $dataDesativacao(value: DateFilter) {
        this.dataDesativacao = value;
    }
}