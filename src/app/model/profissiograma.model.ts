import { Helper } from './../generic/helper';

import { ProfissiogramaGrupo } from './profissiograma-grupo.model';
import { Equipe } from './equipe.model';

export class Profissiograma {
    private id: number;
    private nome: string;
    private vinculo: string;
    private concluido: boolean;
    private profissiogramaGrupos: Array<ProfissiogramaGrupo>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $vinculo(): string {
        return this.vinculo;
    }

    public get $concluido(): boolean {
        return this.concluido;
    }

    public get $profissiogramaGrupos(): Array<ProfissiogramaGrupo> {
        return this.profissiogramaGrupos;
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

    public set $vinculo(value: string) {
        this.vinculo = value;
    }

    public set $concluido(value: boolean) {
        this.concluido = value;
    }

    public set $profissiogramaGrupos(value: Array<ProfissiogramaGrupo>) {
        this.profissiogramaGrupos = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
