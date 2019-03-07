import { RiscoPotencial } from './risco-potencial.model';

export class RiscoEmpregado {
    private id: number;
    private status: string;
    private risco: RiscoPotencial;
    private valor: number;
    private version: number;

    private data: number;
    private dataFront: string;

    public get $id(): number {
        return this.id;
    }

    public get $status(): string {
        return this.status;
    }

    public get $risco(): RiscoPotencial {
        return this.risco;
    }

    public get $valor(): number {
        return this.valor;
    }

    public get $version(): number {
        return this.version;
    }

    public get $data(): number {
        return this.data;
    }

    public get $dataFront(): string {
        return this.dataFront;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $status(value: string) {
        this.status = value;
    }

    public set $risco(value: RiscoPotencial) {
        this.risco = value;
    }

    public set $valor(value: number) {
        this.valor = value;
    }

    public set $version(value: number) {
        this.version = value;
    }

    public set $data(value: number) {
        this.data = value;
    }

    public set $dataFront(value: string) {
        this.dataFront = value;
    }
}
