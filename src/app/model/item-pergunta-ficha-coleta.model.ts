import { PerguntaFichaColeta } from './pergunta-ficha-coleta.model';

export class ItemPerguntaFichaColeta {
    private id: number;
    private titulo: string;
    private path: string;
    private pergunta: PerguntaFichaColeta;
    private ordem: number;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $titulo(): string {
        return this.titulo;
    }

    public get $path(): string {
        return this.path;
    }

    public get $pergunta(): PerguntaFichaColeta {
        return this.pergunta;
    }

    public get $version(): number {
        return this.version;
    }

    public get $ordem(): number {
        return this.ordem;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $titulo(value: string) {
        this.titulo = value;
    }

    public set $path(value: string) {
        this.path = value;
    }

    public set $pergunta(value: PerguntaFichaColeta) {
        this.pergunta = value;
    }

    public set $ordem(value: number) {
        this.ordem = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
