import { GenericFilter } from './../generic/generic-filter';

export class AtividadeFisicaFilter extends GenericFilter {
    private descricao: string;

    public get $descricao(): string {
        return this.descricao;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }
}
