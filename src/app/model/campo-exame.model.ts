import { Exame } from './exame.model';

export class CampoExame {
    private id: number;
    private exame: Exame;
    private codigo: string;
    private titulo: string;
    private numeroLinhas: number;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $exame(): Exame {
        return this.exame;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $titulo(): string {
        return this.titulo;
    }

    public get $numeroLinhas(): number {
        return this.numeroLinhas;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $exame(value: Exame) {
        this.exame = value;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $titulo(value: string) {
        this.titulo = value;
    }

    public set $numeroLinhas(value: number) {
        this.numeroLinhas = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
