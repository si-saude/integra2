export class Base {
    private id: number;
    private nome: string;
    private uf: string;
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
