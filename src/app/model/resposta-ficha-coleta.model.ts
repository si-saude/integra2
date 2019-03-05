import { Checkin } from './checkin.model';
import { ItemRespostaFichaColeta } from './item-resposta-ficha-coleta.model';
import { PerguntaFichaColeta } from './pergunta-ficha-coleta.model';

export class RespostaFichaColeta {
    private id: number;
    private codigo: string;
    private conteudo: string;
    private checkin: Checkin;
    private pergunta: PerguntaFichaColeta;
    private itens: Array<ItemRespostaFichaColeta>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $conteudo(): string {
        return this.conteudo;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $checkin(): Checkin {
        return this.checkin;
    }

    public get $pergunta(): PerguntaFichaColeta {
        return this.pergunta;
    }

    public get $itens(): Array<ItemRespostaFichaColeta> {
        return this.itens;
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

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $checkin(value: Checkin) {
        this.checkin = value;
    }

    public set $pergunta(value: PerguntaFichaColeta) {
        this.pergunta = value;
    }

    public set $itens(value: Array<ItemRespostaFichaColeta>) {
        this.itens = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
