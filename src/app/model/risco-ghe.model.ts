export class RiscoGhe {
    private id: number;
    private titulo: string;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $titulo(): string {
        return this.titulo;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $titulo(value: string) {
        this.titulo = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
