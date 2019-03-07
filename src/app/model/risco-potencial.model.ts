import { Empregado } from './empregado.model';
import { Equipe } from './equipe.model';
import { RiscoEmpregado } from './risco-empregado.model';

export class RiscoPotencial {
    private id: number;
    private status: string;
    private empregado: Empregado;
    private responsavel: Equipe;
    private riscos: Array<RiscoEmpregado>;
    private version: number;

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

    public get $version(): number {
        return this.version;
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

    public set $version(value: number) {
        this.version = value;
    }
}
