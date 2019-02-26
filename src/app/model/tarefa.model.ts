import { Empregado } from './empregado.model';
import { Equipe } from './equipe.model';
import { Profissional } from './profissional.model';
import { Servico } from './servico.model';

export class Tarefa {
    private id: number;
    private cliente: Empregado;
    private equipe: Equipe;
    private responsavel: Profissional;
    private servico: Servico;
    private status: string;
    private version: number;

    private atualizacao: number;
    private atualizacaoFront: string;

    private inicio: number;
    private inicioFront: string;

    private fim: number;
    private fimFront: string;

    public get $id(): number {
        return this.id;
    }

    public get $atualizacao(): number {
        return this.atualizacao;
    }

    public get $atualizacaoFront(): string {
        return this.atualizacaoFront;
    }

    public get $inicio(): number {
        return this.inicio;
    }

    public get $inicioFront(): string {
        return this.inicioFront;
    }

    public get $fim(): number {
        return this.fim;
    }

    public get $fimFront(): string {
        return this.fimFront;
    }

    public get $cliente(): Empregado {
        return this.cliente;
    }

    public get $equipe(): Equipe {
        return this.equipe;
    }

    public get $responsavel(): Profissional {
        return this.responsavel;
    }

    public get $servico(): Servico {
        return this.servico;
    }

    public get $status(): string {
        return this.status;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $atualizacao(value: number) {
        this.atualizacao = value;
    }

    public set $atualizacaoFront(value: string) {
        this.atualizacaoFront = value;
    }

    public set $inicio(value: number) {
        this.inicio = value;
    }

    public set $inicioFront(value: string) {
        this.inicioFront = value;
    }

    public set $fim(value: number) {
        this.fim = value;
    }

    public set $fimFront(value: string) {
        this.fimFront = value;
    }

    public set $cliente(value: Empregado) {
        this.cliente = value;
    }

    public set $equipe(value: Equipe) {
        this.equipe = value;
    }

    public set $responsavel(value: Profissional) {
        this.responsavel = value;
    }

    public set $servico(value: Servico) {
        this.servico = value;
    }

    public set $status(value: string) {
        this.status = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
