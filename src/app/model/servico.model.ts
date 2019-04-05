import { Equipe } from './equipe.model';
import { RegraAtendimento } from './regra-atendimento.model';

export class Servico {
    private id: number;
    private nome: string;
    private codigo: string;
    private grupo: string;
    private url: string;
    private publico: boolean;
    private inativo: boolean;
    private equipes: Array<Equipe>;
    private regraAtendimento: RegraAtendimento;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $grupo(): string {
        return this.grupo;
    }

    public get $url(): string {
        return this.url;
    }

    public get $publico(): boolean {
        return this.publico;
    }

    public get $inativo(): boolean {
        return this.inativo;
    }

    public get $equipes(): Array<Equipe> {
        return this.equipes;
    }

    public get $regraAtendimento(): RegraAtendimento {
        return this.regraAtendimento;
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

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $grupo(value: string) {
        this.grupo = value;
    }

    public set $url(value: string) {
        this.url = value;
    }

    public set $publico(value: boolean) {
        this.publico = value;
    }

    public set $inativo(value: boolean) {
        this.inativo = value;
    }

    public set $regraAtendimento(value: RegraAtendimento) {
        this.regraAtendimento = value;
    }

    public set $equipes(value: Array<Equipe>) {
        this.equipes = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
