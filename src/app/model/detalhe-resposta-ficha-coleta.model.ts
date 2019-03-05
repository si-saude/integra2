import { ItemRespostaFichaColeta } from './item-resposta-ficha-coleta.model';

export class DetalheRespostaFichaColeta {
    private id: number;
    private conteudo: string;
    private ordem: number;
    private item: ItemRespostaFichaColeta;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $conteudo(): string {
        return this.conteudo;
    }

    public get $ordem(): number {
        return this.ordem;
    }

    public get $item(): ItemRespostaFichaColeta {
        return this.item;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $conteudo(value: string) {
        this.conteudo = value;
    }

    public set $ordem(value: number) {
        this.ordem = value;
    }

    public set $item(value: ItemRespostaFichaColeta) {
        this.item = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
