import { Curriculo } from './curriculo.model';
import { Curso } from './curso.model';

export class CurriculoCurso {
    private id: number;
    private version: number;

    private data: number;
    private dataFront: string;

    private curriculo: Curriculo;
    private curso: Curso;

    public get $id(): number {
        return this.id;
    }

    public get $version(): number {
        return this.version;
    }

    public get $data(): number {
        return this.data;
    }

    public get $dataFront(): string {
        return this.dataFront;
    }

    public get $curriculo(): Curriculo {
        return this.curriculo;
    }

    public get $curso(): Curso {
        return this.curso;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $version(value: number) {
        this.version = value;
    }

    public set $data(value: number) {
        this.data = value;
    }

    public set $dataFront(value: string) {
        this.dataFront = value;
    }

    public set $curriculo(value: Curriculo) {
        this.curriculo = value;
    }

    public set $curso(value: Curso) {
        this.curso = value;
    }
}
