import { RespostaAvaliacaoAtendimento } from './resposta-avaliacao-atendimento.model';

export class ItemRespostaAvaliacaoAtendimento {
    private id: number;
    private conteudo: string;
    private resposta: RespostaAvaliacaoAtendimento;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $conteudo(): string {
        return this.conteudo;
    }

    public get $resposta(): RespostaAvaliacaoAtendimento {
        return this.resposta;
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

    public set $resposta(value: RespostaAvaliacaoAtendimento) {
        this.resposta = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
    