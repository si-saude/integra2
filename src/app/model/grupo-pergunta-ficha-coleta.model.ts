import { Helper } from './../generic/helper';

export class GrupoPerguntaFichaColeta {
    private id: number;
    private nome: string;
    private ordem: number;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $ordem(): number {
        return this.ordem;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $ordem(value: number) {
        this.ordem = Helper.validateNumber(value);
    }

    public set $version(value: number) {
        this.version = value;
    }
}
