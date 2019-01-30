import { RiscoGhe } from './risco-ghe.model';

export class Ghe {
    private id: number;
    private nome: string;
    private codigo: string;
    private descricao: string;
    private descricaoAmbiente: string;
    private descricaoTarefas: string;
    private duracaoJornada: number;
    private risco: RiscoGhe;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $uf(): string {
        return this.uf;
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

    public set $uf(value: string) {
        this.uf = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
