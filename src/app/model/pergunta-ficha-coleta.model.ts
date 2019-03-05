import { Equipe } from './equipe.model';
import { GrupoPerguntaFichaColeta } from './grupo-pergunta-ficha-coleta.model';
import { ItemPerguntaFichaColeta } from './item-pergunta-ficha-coleta.model';

export class PerguntaFichaColeta {
    private id: number;
    private grupo: GrupoPerguntaFichaColeta;
    private tipo: string;
    private codigo: string;
    private path: string;
    private descricao: string;
    private inativo: boolean;
    private obrigatorio: boolean;
    private itens: Array<ItemPerguntaFichaColeta>;
    private equipes: Array<Equipe>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $tipo(): string {
        return this.tipo;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $path(): string {
        return this.path;
    }

    public get $descricao(): string {
        return this.descricao;
    }

    public get $inativo(): boolean{
        return this.inativo;
    }

    public get $obrigatorio(): boolean{
        return this.obrigatorio;
    }

    public get $itens(): Array<ItemPerguntaFichaColeta>{
        return this.itens;
    }

    public get $equipes(): Array<Equipe>{
        return this.equipes;
    }

    public get $grupo(): GrupoPerguntaFichaColeta {
        return this.grupo;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $tipo(value: string) {
        this.tipo = value;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $path(value: string) {
        this.path = value;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }

    public set $inativo(value: boolean) {
        this.inativo = value;
    }

    public set $obrigatorio(value: boolean) {
        this.obrigatorio = value;
    }

    public set $equipes(value: Array<Equipe>) {
        this.equipes = value;
    }

    public set $itens(value: Array<ItemPerguntaFichaColeta>) {
        this.itens = value;
    }

    public set $grupo(value: GrupoPerguntaFichaColeta) {
        this.grupo = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
