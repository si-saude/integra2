import { Equipe } from "./equipe.model";

export class Intervencao {
    private id: number;
    private descricao: string;
    private inativo: boolean;
    private equipe: Equipe;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $descricao(): string {
        return this.descricao;
    }

    public get $inativo(): boolean {
        return this.inativo;
    }

    public get $equipe(): Equipe {
        return this.equipe;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }

    public set $inativo(value: boolean) {
        this.inativo = value;
    }

    public set $equipe(value: Equipe) {
        this.equipe = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
