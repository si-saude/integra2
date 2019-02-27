import { GenericFilter } from './../generic/generic-filter';
import { BooleanFilter } from './../generic/boolean-filter';

export class ProfissiogramaFilter extends GenericFilter {
    private nome: string;
    private vinculo: string;
    private concluido: BooleanFilter;

    public get $nome(): string {
        return this.nome;
    }

    public get $vinculo(): string {
        return this.vinculo;
    }

    public get $concluido(): BooleanFilter {
        return this.concluido;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $vinculo(value: string) {
        this.vinculo = value;
    }

    public set $concluido(value: BooleanFilter) {
        this.concluido = value;
    }
}
