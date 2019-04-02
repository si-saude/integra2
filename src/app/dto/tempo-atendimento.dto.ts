export class TempoAtendimento {

    private empregado: string;
    private profissional: string;
    private equipe: string;
    private status: string;
    
    private duracao: string;
    private tempoTotal: string;

    private inicio: number;
    private inicioFront: string;
    private fim: number;
    private fimFront: string;

    private chegada: number;
    private chegadaFront: string;
    private saida: number;
    private saidaFront: string;

    public get $inicio(): number {
        return this.inicio;
    }

    public set $inicio(value: number) {
        this.inicio = value;
    }

    public get $inicioFront(): string {
        return this.inicioFront;
    }

    public set $inicioFront(value: string) {
        this.inicioFront = value;
    }

    public get $fim(): number {
        return this.fim;
    }

    public set $fim(value: number) {
        this.fim = value;
    }

    public get $fimFront(): string {
        return this.fimFront;
    }

    public set $fimFront(value: string) {
        this.fimFront = value;
    }

    public get $duracao(): string {
        return this.duracao;
    }

    public set $duracao(value: string) {
        this.duracao = value;
    }

    public get $chegada(): number {
        return this.chegada;
    }

    public set $chegada(value: number) {
        this.chegada = value;
    }

    public get $chegadaFront(): string {
        return this.chegadaFront;
    }

    public set $chegadaFront(value: string) {
        this.chegadaFront = value;
    }

    public get $saida(): number {
        return this.saida;
    }

    public set $saida(value: number) {
        this.saida = value;
    }

    public get $saidaFront(): string {
        return this.saidaFront;
    }

    public set $saidaFront(value: string) {
        this.saidaFront = value;
    }

    public get $tempoTotal(): string {
        return this.tempoTotal;
    }

    public set $tempoTotal(value: string) {
        this.tempoTotal = value;
    }

    public get $empregado(): string {
        return this.empregado;
    }

    public set $empregado(value: string) {
        this.empregado = value;
    }

    public get $profissional(): string {
        return this.profissional;
    }

    public set $profissional(value: string) {
        this.profissional = value;
    }

    public get $equipe(): string {
        return this.equipe;
    }

    public set $equipe(value: string) {
        this.equipe = value;
    }

    public get $status(): string {
        return this.status;
    }

    public set $status(value: string) {
        this.status = value;
    }
}
