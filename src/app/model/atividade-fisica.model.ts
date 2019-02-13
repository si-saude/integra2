export class AtividadeFisica {
    private id: number;
    private descricao: string;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $descricao(): string {
        return this.descricao;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
