import { GenericFilter } from './../generic/generic-filter';
import { BooleanFilter } from './../generic/boolean-filter';

export class ServicoFilter extends GenericFilter {
    private nome: string;
    private codigo: string;
    private grupo: string;
    private inativo: BooleanFilter;
    private publico: BooleanFilter;

    public get $codigo(): string {
        return this.codigo;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $grupo(): string {
        return this.grupo;
    }

    public get $inativo(): BooleanFilter {
        return this.inativo;
    }

    public get $publico(): BooleanFilter {
        return this.publico;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $grupo(value: string) {
        this.grupo = value;
    }

    public set $inativo(value: BooleanFilter) {
        this.inativo = value;
    }

    public set $publico(value: BooleanFilter) {
        this.publico = value;
    }
}
