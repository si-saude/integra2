import { Questao } from './questao.model';

export class Questionario {
    private id: number;
    private nome: string;
    private tipo: string;
    private inativo: boolean;
    private questoes: Array<Questao>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $tipo(): string {
        return this.tipo;
    }

    public get $inativo(): boolean {
        return this.inativo;
    }

    public get $questoes(): Array<Questao> {
        return this.questoes;
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

    public set $tipo(value: string) {
        this.tipo = value;
    }

    public set $inativo(value: boolean) {
        this.inativo = value;
    }

    public set $questoes(value: Array<Questao>) {
        this.questoes = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
