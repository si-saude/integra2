export class Agenda {

    private cliente: string;
    private servico: string;
    private equipes: string;
    private status: string;

    private data: number;
    private dataFront: string;

    public get $data(): number {
        return this.data;
    }

    public set $data(value: number) {
        this.data = value;
    }

    public get $dataFront(): string {
        return this.dataFront;
    }

    public set $dataFront(value: string) {
        this.dataFront = value;
    }

    public get $cliente(): string {
        return this.cliente;
    }

    public set $cliente(value: string) {
        this.cliente = value;
    }

    public get $servico(): string {
        return this.servico;
    }

    public set $servico(value: string) {
        this.servico = value;
    }

    public get $equipes(): string {
        return this.equipes;
    }

    public set $equipes(value: string) {
        this.equipes = value;
    }

    public get $status(): string {
        return this.status;
    }

    public set $status(value: string) {
        this.status = value;
    }
}
