import { Localizacao } from './localizacao.model';
import { Profissional } from './profissional.model';

export class FilaAtendimento {
    private id: number;
    private data: number;
    private profissional: Profissional;
    private localizacao: Localizacao;
    private status: string;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $data(): number {
        return this.data;
    }

    public get $profissional(): Profissional {
        return this.profissional;
    }

    public get $localizacao(): Localizacao {
        return this.localizacao;
    }

    public get $status(): string {
        return this.status;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $data(value: number) {
        this.data = value;
    }

    public set $profissional(value: Profissional) {
        this.profissional = value;
    }

    public set $localizacao(value: Localizacao) {
        this.localizacao = value;
    }

    public set $status(value: string) {
        this.status = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
