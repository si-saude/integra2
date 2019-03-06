import { AvaliacaoAtendimento } from './avaliacao-atendimento.model';
import { ItemRespostaAvaliacaoAtendimento } from './item-resposta-avaliacao-atendimento.model';
import { Questao } from './questao.model';

export class RespostaAvaliacaoAtendimento {
    private id: number;
    private conteudo: string;
    private codigo: string;
    private avaliacao: AvaliacaoAtendimento;
    private questao: Questao;
    private itens: Array<ItemRespostaAvaliacaoAtendimento>;
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

    public get $avaliacao(): AvaliacaoAtendimento {
        return this.avaliacao;
    }

    public get $questao(): Questao {
        return this.questao;
    }

    public get $itens(): Array<ItemRespostaAvaliacaoAtendimento> {
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

    public set $avaliacao(value: AvaliacaoAtendimento) {
        this.avaliacao = value;
    }

    public set $questao(value: Questao) {
        this.questao = value;
    }

    public set $itens(value: Array<ItemRespostaAvaliacaoAtendimento>) {
        this.itens = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
    