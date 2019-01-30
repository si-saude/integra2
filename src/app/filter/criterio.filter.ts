import { GenericFilter } from './../generic/generic-filter';

export class CriterioFilter extends GenericFilter {
    private nome: string;
    private tipo: string;

    public get $nome(): string {
        return this.nome;
    }

    public get $tipo(): string {
        return this.tipo;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $tipo(value: string) {
        this.tipo = value;
    }
}
