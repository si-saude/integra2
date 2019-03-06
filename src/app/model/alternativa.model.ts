import { Questao } from './questao.model';

export class Alternativa {
    private id: number;
    private questao: Questao;
    private titulo: string;
    private codigo: string;
    private codigoAnterior: string;
    private codigoProximo: string;
    private marcado = false;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $marcado(): boolean {
        return this.marcado;
    }

    public get $questao(): Questao {
        return this.questao;
    }

    public get $titulo(): string {
        return this.titulo;
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

    public set $marcado(value: boolean) {
        this.marcado = value;
    }

    public set $questao(value: Questao) {
        this.questao = value;
    }

    public set $titulo(value: string) {
        this.titulo = value;
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
