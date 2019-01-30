import { Curso } from './curso.model';

export class Cargo {
    private id: number;
    private nome: string;
    private cursos: Array<Curso>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $cursos(): Array<Curso> {
        return this.cursos;
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

    public set $cursos(value: Array<Curso>) {
        this.cursos = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
