import { Atendimento } from './atendimento.model';
import { AtividadeFisica } from './atividade-fisica.model';
import { AvaliacaoFisica } from './avaliacao-fisica.model';

export class AtendimentoAtividadeFisica {
    private id: number;

    private avaliacaoFisica: AvaliacaoFisica;
    private atividade: AtividadeFisica;

    private domingo = false;
    private segunda = false;
    private terca = false;
    private quarta = false;
    private quinta = false;
    private sexta = false;
    private sabado = false;
    private minutos = 0;
    private total = 0;
    private classificacao: string;
    private tipo: string;
    private observacao: string;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $avaliacaoFisica(): AvaliacaoFisica {
        return this.avaliacaoFisica;
    }

    public get $atividade(): AtividadeFisica {
        return this.atividade;
    }

    public get $domingo(): boolean {
        return this.domingo;
    }

    public get $segunda(): boolean {
        return this.segunda;
    }

    public get $terca(): boolean {
        return this.terca;
    }

    public get $quarta(): boolean {
        return this.quarta;
    }

    public get $quinta(): boolean {
        return this.quinta;
    }

    public get $sexta(): boolean {
        return this.sexta;
    }

    public get $sabado(): boolean {
        return this.sabado;
    }

    public get $minutos(): number {
        return this.minutos;
    }

    public get $total(): number {
        return this.total;
    }

    public get $classificacao(): string {
        return this.classificacao;
    }

    public get $tipo(): string {
        return this.tipo;
    }

    public get $observacao(): string {
        return this.observacao;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $avaliacaoFisica(value: AvaliacaoFisica) {
        this.avaliacaoFisica = value;
    }

    public set $atividade(value: AtividadeFisica) {
        this.atividade = value;
    }

    public set $domingo(value: boolean) {
        this.domingo = value;
    }

    public set $segunda(value: boolean) {
        this.segunda = value;
    }

    public set $terca(value: boolean) {
        this.terca = value;
    }

    public set $quarta(value: boolean) {
        this.quarta = value;
    }

    public set $quinta(value: boolean) {
        this.quinta = value;
    }

    public set $sexta(value: boolean) {
        this.sexta = value;
    }

    public set $sabado(value: boolean) {
        this.sabado = value;
    }

    public set $minutos(value: number) {
        this.minutos = value;
    }

    public set $total(value: number) {
        this.total = value;
    }

    public set $classificacao(value: string) {
        this.classificacao = value;
    }

    public set $tipo(value: string) {
        this.tipo = value;
    }

    public set $observacao(value: string) {
        this.observacao = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
