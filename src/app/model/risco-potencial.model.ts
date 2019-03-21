import { Empregado } from './empregado.model';
import { Equipe } from './equipe.model';
import { RiscoEmpregado } from './risco-empregado.model';

export class RiscoPotencial {
    private id: number;
    private status: string;
    private empregado: Empregado;
    private responsavel: Equipe;
    private riscos: Array<RiscoEmpregado>;
    private valor: number;
    private version: number;
    private ranking: number;

    private data: number;
    private dataFront: string;

    public get $id(): number {
        return this.id;
    }

    public get $status(): string {
        return this.status;
    }

    public get $empregado(): Empregado {
        return this.empregado;
    }

    public get $responsavel(): Equipe {
        return this.responsavel;
    }

    public get $riscos(): Array<RiscoEmpregado> {
        return this.riscos;
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

    public get $ranking(): number {
        return this.ranking;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $status(value: string) {
        this.status = value;
    }

    public set $empregado(value: Empregado) {
        this.empregado = value;
    }

    public set $responsavel(value: Equipe) {
        this.responsavel = value;
    }

    public set $riscos(value: Array<RiscoEmpregado>) {
        this.riscos = value;
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

    public set $ranking(value: number) {
        this.ranking = value;
    }
}
