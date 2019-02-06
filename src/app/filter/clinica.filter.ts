import { GenericFilter } from './../generic/generic-filter';

export class ClinicaFilter extends GenericFilter {
    private nome: string;
    private uf: string;

    public get $nome(): string {
        return this.nome;
    }

    public get $uf(): string {
        return this.uf;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $uf(value: string) {
        this.uf = value;
    }
}
