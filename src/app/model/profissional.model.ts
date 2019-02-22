import { Curriculo } from './curriculo.model';
import { Empregado } from './empregado.model';
import { Equipe } from './equipe.model';
import { Registro } from './registro.model';
import { Servico } from './servico.model';

export class Profissional {
    private id: number;
    private mi: string;
    private version: number;

    private dataAso: number;
    private dataAsoFront: string;

    private curriculo: Curriculo;
    private empregado: Empregado;
    private registro: Registro;
    private equipes: Array<Equipe>;
    private servicos: Array<Servico>;

    public get $id(): number {
        return this.id;
    }

    public get $mi(): string {
        return this.mi;
    }

    public get $dataAso(): number {
        return this.dataAso;
    }

    public get $dataAsoFront(): string {
        return this.dataAsoFront;
    }

    public get $curriculo(): Curriculo {
        return this.curriculo;
    }

    public get $empregado(): Empregado {
        return this.empregado;
    }

    public get $registro(): Registro {
        return this.registro;
    }

    public get $version(): number {
        return this.version;
    }

    public get $equipes(): Array<Equipe> {
        return this.equipes;
    }

    public get $servicos(): Array<Servico> {
        return this.servicos;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $dataAso(value: number) {
        this.dataAso = value;
    }

    public set $dataAsoFront(value: string) {
        this.dataAsoFront = value;
    }

    public set $mi(value: string) {
        this.mi = value;
    }

    public set $curriculo(value: Curriculo) {
        this.curriculo = value;
    }

    public set $empregado(value: Empregado) {
        this.empregado = value;
    }

    public set $registro(value: Registro) {
        this.registro = value;
    }

    public set $equipes(value: Array<Equipe>) {
        this.equipes = value;
    }

    public set $servicos(value: Array<Servico>) {
        this.servicos = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
