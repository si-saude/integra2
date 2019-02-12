import { Equipe } from './equipe.model';
import { RegraAtendimento } from './regra-atendimento.model';
import { Dependencia } from './dependencia.model';

export class RegraAtendimentoEquipe {
    private id: number;
    private equipe: Equipe;
    private regra: RegraAtendimento;
    private acolhimento: boolean;
    private dependencias: Array<Dependencia>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $equipe(): Equipe {
        return this.equipe;
    }

    public get $regra(): RegraAtendimento {
        return this.regra;
    }

    public get $acolhimento(): boolean {
        return this.acolhimento;
    }

    public get $dependencias(): Array<Dependencia> {
        return this.dependencias;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $equipe(value: Equipe) {
        this.equipe = value;
    }

    public set $regra(value: RegraAtendimento) {
        this.regra = value;
    }

    public set $acolhimento(value: boolean) {
        this.acolhimento = value;
    }

    public set $dependencias(value: Array<Dependencia>) {
        this.dependencias = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
