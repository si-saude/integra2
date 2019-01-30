import { GenericFilter } from './../generic/generic-filter';

export class EquipeFilter extends GenericFilter {
    private nome: string;
    private abreviacao: string;

    public get $nome(): string {
        return this.nome;
    }

    public get $abreviacao(): string {
        return this.abreviacao;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $abreviacao(value: string) {
        this.abreviacao = value;
    }
}
