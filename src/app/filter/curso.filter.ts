import { GenericFilter } from './../generic/generic-filter';

export class CursoFilter extends GenericFilter {
    private nome: string;
    private descricao: string;

    public get $nome(): string {
        return this.nome;
    }

    public get $descricao(): string {
        return this.descricao;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }
}
