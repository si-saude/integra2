import { Alternativa } from './alternativa.model';
import { Questionario } from './questionario.model';

export class Questao {
    private id: number;
    private questionario: Questionario;
    private titulo: string;
    private tipo: string;
    private codigo: string;
    private codigoAnterior: string;
    private codigoProximo: string;
    private alternativas: Array<Alternativa>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $questionario(): Questionario {
        return this.questionario;
    }

    public get $alternativas(): Array<Alternativa> {
        return this.alternativas;
    }

    public get $titulo(): string {
        return this.titulo;
    }

    public get $tipo(): string {
        return this.tipo;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $codigoAnterior(): string {
        return this.codigoAnterior;
    }

    public get $codigoProximo(): string {
        return this.codigoProximo;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $alternativas(value: Array<Alternativa>) {
        this.alternativas = value;
    }

    public set $questionario(value: Questionario) {
        this.questionario = value;
    }

    public set $titulo(value: string) {
        this.titulo = value;
    }

    public set $tipo(value: string) {
        this.tipo = value;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $codigoAnterior(value: string) {
        this.codigoAnterior = value;
    }

    public set $codigoProximo(value: string) {
        this.codigoProximo = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
