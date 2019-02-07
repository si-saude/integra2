import { IndicadorSast } from './indicador-sast.model';

export class IndicadorAssociadoSast {
    private id: number;
    private codigo: string;
    private indicadorSast: IndicadorSast;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $indicadorSast(): IndicadorSast {
        return this.indicadorSast;
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

    public set $indicadorSast(value: IndicadorSast) {
        this.indicadorSast = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
