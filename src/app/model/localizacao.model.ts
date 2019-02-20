import { Base } from './base.model';

export class Localizacao {
    private id: number;
    private nome: string;
    private base: Base;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $base(): Base {
        return this.base;
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

    public set $base(value: Base) {
        this.base = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
