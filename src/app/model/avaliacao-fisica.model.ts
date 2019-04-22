import { Atendimento } from './atendimento.model';
import { AtendimentoAtividadeFisica } from './atendimento-atividade-fisica.model';

export class AvaliacaoFisica {
    private id: number;
    private pratica = false;
    private interesse = false;
    private acao = false;
    private observacoes: string;
    private atendimento: Atendimento;
    private atendimentoAtividadesFisicas: Array<AtendimentoAtividadeFisica>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $pratica(): boolean {
        return this.pratica;
    }

    public get $interesse(): boolean {
        return this.interesse;
    }

    public get $acao(): boolean {
        return this.acao;
    }

    public get $observacoes(): string {
        return this.observacoes;
    }

    public get $atendimento(): Atendimento {
        return this.atendimento;
    }

    public get $atendimentoAtividadesFisicas(): Array<AtendimentoAtividadeFisica> {
        return this.atendimentoAtividadesFisicas;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $pratica(value: boolean) {
        this.pratica = value;
    }

    public set $interesse(value: boolean) {
        this.interesse = value;
    }

    public set $acao(value: boolean) {
        this.acao = value;
    }

    public set $observacoes(value: string) {
        this.observacoes = value;
    }

    public set $atendimento(value: Atendimento) {
        this.atendimento = value;
    }

    public set $atendimentoAtividadesFisicas(value: Array<AtendimentoAtividadeFisica>) {
        this.atendimentoAtividadesFisicas = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
