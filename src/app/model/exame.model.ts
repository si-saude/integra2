import { CampoExame } from './campo-exame.model';

export class Exame {
    private id: number;
    private codigo: string;
    private descricao: string;
    private ordem: number;
    private campoExames: Array<CampoExame>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $descricao(): string {
        return this.descricao;
    }

    public get $ordem(): number {
        return this.ordem;
    }

    public get $campoExames(): Array<CampoExame> {
        return this.campoExames;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }

    public set $ordem(value: number) {
        this.ordem = value;
    }

    public set $campoExames(value: Array<CampoExame>) {
        this.campoExames = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
