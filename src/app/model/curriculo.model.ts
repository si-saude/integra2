import { CurriculoCurso } from './curriculo-curso.model';

export class Curriculo {
    private id: number;
    private historico: string;
    private formacao: string;
    private atuacao: string;
    private curriculoCursos: Array<CurriculoCurso>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $historico(): string {
        return this.historico;
    }

    public get $formacao(): string {
        return this.formacao;
    }

    public get $atuacao(): string {
        return this.atuacao;
    }

    public get $version(): number {
        return this.version;
    }

    public get $curriculoCursos(): Array<CurriculoCurso> {
        return this.curriculoCursos;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $historico(historico: string){
        this.historico = historico;
    }

    public set $formacao(formacao: string){
        this.formacao = formacao;
    }

    public set $atuacao(atuacao: string){
        this.atuacao = atuacao;
    }

    public set $curriculoCursos(curriculoCursos: Array<CurriculoCurso>){
        this.curriculoCursos = curriculoCursos;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
