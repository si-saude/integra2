import { Empregado } from './empregado.model';
import { Localizacao } from './localizacao.model';
import { RespostaFichaColeta } from './resposta-ficha-coleta.model';
import { Servico } from './servico.model';
import { Tarefa } from './tarefa.model';

export class Checkin {
    private id: number;
    private empregado: Empregado;
    private localizacao: Localizacao;
    private servico: Servico;
    private status: string;
    private tarefas: Array<Tarefa>;
    private respostas: Array<RespostaFichaColeta>;
    private version: number;

    private chegada: number;
    private chegadaFront: string;

    private atualizacao: number;
    private atualizacaoFront: string;

    public get $id(): number {
        return this.id;
    }

    public get $empregado(): Empregado {
        return this.empregado;
    }

    public get $localizacao(): Localizacao {
        return this.localizacao;
    }

    public get $servico(): Servico {
        return this.servico;
    }

    public get $status(): string {
        return this.status;
    }

    public get $tarefas(): Array<Tarefa> {
        return this.tarefas;
    }

    public get $respostas(): Array<RespostaFichaColeta> {
        return this.respostas;
    }

    public get $version(): number {
        return this.version;
    }

    public get $chegada(): number {
        return this.chegada;
    }

    public get $chegadaFront(): string {
        return this.chegadaFront;
    }

    public get $atualizacao(): number {
        return this.atualizacao;
    }

    public get $atualizacaoFront(): string {
        return this.atualizacaoFront;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $servico(value: Servico) {
        this.servico = value;
    }

    public set $empregado(value: Empregado) {
        this.empregado = value;
    }

    public set $localizacao(value: Localizacao) {
        this.localizacao = value;
    }

    public set $status(value: string) {
        this.status = value;
    }

    public set $tarefas(value: Array<Tarefa>) {
        this.tarefas = value;
    }

    public set $respostas(value: Array<RespostaFichaColeta>) {
        this.respostas = value;
    }

    public set $version(value: number) {
        this.version = value;
    }

    public set $chegada(value: number) {
        this.chegada = value;
    }

    public set $chegadaFront(value: string) {
        this.chegadaFront = value;
    }

    public set $atualizacao(value: number) {
        this.atualizacao = value;
    }

    public set $atualizacaoFront(value: string) {
        this.atualizacaoFront = value;
    }
}
