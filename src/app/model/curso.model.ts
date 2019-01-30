export class Curso {
    private id: number;
    private nome: string;
    private descricao: string;
    private validade: number;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $descricao(): string {
        return this.descricao;
    }

    public get $validade(): number {
        return this.validade;
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

    public set $descricao(value: string) {
        this.descricao = value;
    }

    public set $validade(value: number) {
        this.validade = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
