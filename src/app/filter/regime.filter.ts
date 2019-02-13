import { GenericFilter } from './../generic/generic-filter';

export class RegimeFilter extends GenericFilter {
    private nome: string;

    public get $nome(): string {
        return this.nome;
    }

    public set $nome(value: string) {
        this.nome = value;
    }
}
