export class Ghee {
    private id: number;
    private nome: string;
    private descricao: string;
    private codigo: string;
    private version: number;

    private dataCriacao: number;
    private dataCriacaoFront: string;

    private dataDesativacao: number;
    private dataDesativacaoFront: string;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $descricao(): string {
        return this.descricao;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $version(): number {
        return this.version;
    }

    public get $dataCriacao(): number {
        return this.dataCriacao;
    }

    public get $dataCriacaoFront(): string {
        return this.dataCriacaoFront;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $version(value: number) {
        this.version = value;
    }

    public set $dataCriacao(value: number) {
        this.dataCriacao = value;
    }

    public set $dataCriacaoFront(value: string) {
        this.dataCriacaoFront = value;
    }

    public set $dataDesativacao(value: number) {
        this.dataDesativacao = value;
    }

    public set $dataDesativacaoFront(value: string) {
        this.dataDesativacaoFront = value;
    }
}
