import { GenericFilter } from './../generic/generic-filter';

export class ExameFilter extends GenericFilter {
    private codigo: string;
    private descricao: string;

    public get $codigo(): string {
        return this.codigo;
    }

    public get $descricao(): string {
        return this.descricao;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }
}
