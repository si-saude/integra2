export class RequisitoAso {
    private id: number;
    private conteudo: string;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $conteudo(): string {
        return this.conteudo;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $conteudo(value: string) {
        this.conteudo = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
