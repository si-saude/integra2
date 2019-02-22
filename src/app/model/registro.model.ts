export class Registro {
    private id: number;
    private conselho: string;
    private uf: string;
    private numero: string;

    private vencimento: number;
    private vencimentoFront: string;

    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $conselho(): string {
        return this.conselho;
    }

    public get $uf(): string {
        return this.uf;
    }

    public get $numero(): string {
        return this.numero;
    }

    public get $vencimento(): number {
        return this.vencimento;
    }

    public get $vencimentoFront(): string {
        return this.vencimentoFront;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $conselho(conselho: string){
        this.conselho = conselho;
    }

    public set $uf(uf: string){
        this.uf = uf;
    }

    public set $numero(numero: string){
        this.numero = numero;
    }

    public set $vencimento(value: number) {
        this.vencimento = value;
    }

    public set $vencimentoFront(value: string) {
        this.vencimentoFront = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
