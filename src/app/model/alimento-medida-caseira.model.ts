import { Alimento } from './alimento.model';
import { MedidaCaseira } from './medida-caseira.model';

export class AlimentoMedidaCaseira {
    private id: number;
    private alimento: Alimento;
    private medidaCaseira: MedidaCaseira;
    private referencia: string;
    private quantidade: number;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $alimento(): Alimento {
        return this.alimento;
    }

    public get $medidaCaseira(): MedidaCaseira {
        return this.medidaCaseira;
    }

    public get $referencia(): string {
        return this.referencia;
    }

    public get $quantidade(): number {
        return this.quantidade;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $alimento(value: Alimento) {
        this.alimento = value;
    }

    public set $medidaCaseira(value: MedidaCaseira) {
        this.medidaCaseira = value;
    }

    public set $referencia(value: string) {
        this.referencia = value;
    }

    public set $quantidade(value: number) {
        this.quantidade = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
