import { DetalheRespostaFichaColeta } from './detalhe-resposta-ficha-coleta.model';
import { RespostaFichaColeta } from './resposta-ficha-coleta.model';

export class ItemRespostaFichaColeta {
    private id: number;
    private resposta: RespostaFichaColeta;
    private detalhes: Array<DetalheRespostaFichaColeta>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $resposta(): RespostaFichaColeta {
        return this.resposta;
    }

    public get $detalhes(): Array<DetalheRespostaFichaColeta> {
        return this.detalhes;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $resposta(value: RespostaFichaColeta) {
        this.resposta = value;
    }

    public set $detalhes(value: Array<DetalheRespostaFichaColeta>) {
        this.detalhes = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
