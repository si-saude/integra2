import { GenericFilter } from './../generic/generic-filter';
import { BooleanFilter } from './../generic/boolean-filter';

export class AlimentoFilter extends GenericFilter {
    private nome: string;
    private tipo: string;
    private inativo: BooleanFilter;

    public get $nome(): string {
        return this.nome;
    }

    public get $tipo(): string {
        return this.tipo;
    }

    public get $inativo(): BooleanFilter {
        return this.inativo;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $tipo(value: string) {
        this.tipo = value;
    }

    public set $inativo(value: BooleanFilter) {
        this.inativo = value;
    }
}
