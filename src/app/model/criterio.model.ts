export class Criterio {
    private id: number;
    private nome: string;
    private tipo: string;
    private operador: string;
    private valor: string;
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

    public get $operador(): string {
        return this.operador;
    }

    public get $valor(): string {
        return this.valor;
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

    public set $operador(value: string) {
        this.operador = value;
    }

    public set $valor(value: string) {
        this.valor = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
