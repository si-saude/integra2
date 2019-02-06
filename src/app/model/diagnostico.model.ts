import { Eixo } from './eixo.model';

export class Diagnostico {
    private id: number;
    private codigo: string;
    private descricao: string;
    private inativo: boolean;
    private eixo: Eixo;
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

    public get $inativo(): boolean {
        return this.inativo;
    }

    public get $eixo(): Eixo {
        return this.eixo;
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

    public set $inativo(value: boolean) {
        this.inativo = value;
    }

    public set $eixo(value: Eixo) {
        this.eixo = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
