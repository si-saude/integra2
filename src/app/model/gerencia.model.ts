export class Gerencia {
    private id: number;
    private descricao: string;
    private codigo: string;
    private codigoCompleto: string;
    private ausentePeriodico: boolean;
    private gerencia: Gerencia;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $descricao(): string {
        return this.descricao;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $codigoCompleto(): string {
        return this.codigoCompleto;
    }

    public get $ausentePeriodico(): boolean {
        return this.ausentePeriodico;
    }

    public get $gerencia(): Gerencia {
        return this.gerencia;
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

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $codigoCompleto(value: string) {
        this.codigoCompleto = value;
    }

    public set $ausentePeriodico(value: boolean) {
        this.ausentePeriodico = value;
    }

    public set $gerencia(value: Gerencia) {
        this.gerencia = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
