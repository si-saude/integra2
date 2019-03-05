import { Atendimento } from './atendimento.model';
import { IndicadorSast } from './indicador-sast.model';

export class Triagem {
    private id: number;
    private codigo: string;
    private indice = -1;
    private indicador: IndicadorSast;
    private atendimento: Atendimento;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $atendimento(): Atendimento {
        return this.atendimento;
    }

    public get $indicador(): IndicadorSast {
        return this.indicador;
    }

    public get $indice(): number {
        return this.indice;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $atendimento(value: Atendimento) {
        this.atendimento = value;
    }

    public set $indicador(value: IndicadorSast) {
        this.indicador = value;
    }

    public set $indice(value: number) {
        this.indice = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
