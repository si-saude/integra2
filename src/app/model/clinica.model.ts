import { Exame } from './exame.model';

export class Clinica {
    private id: number;
    private nome: string;
    private endereco: string;
    private telefones: string;
    private uf: string;
    private exames: Array<Exame>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $endereco(): string {
        return this.endereco;
    }

    public get $telefones(): string {
        return this.telefones;
    }

    public get $uf(): string {
        return this.uf;
    }

    public get $version(): number {
        return this.version;
    }

    public get $exames(): Array<Exame> {
        return this.exames;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $nome(nome: string){
        this.nome = nome;
    }

    public set $endereco(endereco: string){
        this.endereco = endereco;
    }

    public set $telefones(telefones: string){
        this.telefones = telefones;
    }

    public set $uf(uf: string){
        this.uf = uf;
    }

    public set $exames(exames: Array<Exame>){
        this.exames = exames;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
