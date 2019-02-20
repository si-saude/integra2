export class Telefone {
    private id: number;
    private numero: string;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $numero(): string {
        return this.numero;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $numero(value: string) {
        this.numero = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
