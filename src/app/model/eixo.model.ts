import { Equipe } from './equipe.model';

export class Eixo {
    private id: number;
    private titulo: string;
    private equipe: Equipe;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $titulo(): string {
        return this.titulo;
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

    public set $titulo(value: string) {
        this.titulo = value;
    }

    public set $equipe(value: Equipe) {
        this.equipe = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
