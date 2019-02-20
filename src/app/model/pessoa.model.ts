
import { Endereco } from './endereco.model';
import { Telefone } from './telefone.model';

export class Pessoa {
    private id: number;
    private nome: string;
    private rg: string;
    private cpf: string;
    private sexo: string;
    private idade: number;
    private endereco: Endereco;
    private telefones: Array<Telefone>;
    private version: number;

    private dataNascimento: number;
    private dataNascimentoFront: string;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $rg(): string {
        return this.rg;
    }

    public get $cpf(): string {
        return this.cpf;
    }

    public get $sexo(): string {
        return this.sexo;
    }

    public get $idade(): number {
        return this.idade;
    }

    public get $endereco(): Endereco {
        return this.endereco;
    }

    public get $telefones(): Array<Telefone> {
        return this.telefones;
    }

    public get $dataNascimento(): number {
        return this.dataNascimento;
    }

    public get $dataNascimentoFront(): string {
        return this.dataNascimentoFront;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $rg(value: string) {
        this.rg = value;
    }

    public set $cpf(value: string) {
        this.cpf = value;
    }

    public set $sexo(value: string) {
        this.sexo = value;
    }

    public set $idade(value: number) {
        this.idade = value;
    }

    public set $endereco(value: Endereco) {
        this.endereco = value;
    }

    public set $telefones(value: Array<Telefone>) {
        this.telefones = value;
    }

    public set $dataNascimento(value: number) {
        this.dataNascimento = value;
    }

    public set $dataNascimentoFront(value: string) {
        this.dataNascimentoFront = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
