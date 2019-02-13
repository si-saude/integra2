import { Helper } from './../generic/helper';

export class Equipe {
    private id: number;
    private nome: string;
    private abreviacao: string;
    private prioridadeSast: number;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $abreviacao(): string {
        return this.abreviacao;
    }

    public get $prioridadeSast(): number {
        return this.prioridadeSast;
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

    public set $abreviacao(value: string) {
        this.abreviacao = value;
    }

    public set $prioridadeSast(value: number) {
        this.prioridadeSast = Helper.validateNumber(value);
    }

    public set $version(value: number) {
        this.version = value;
    }
}
