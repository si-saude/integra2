import { Exame } from './exame.model';
import { ProfissiogramaGrupo } from './profissiograma-grupo.model';
import { Criterio } from './criterio.model';

export class ProfissiogramaExame {
    private id: number;
    private opcional: boolean;
    private exame: Exame;
    private profissiogramaGrupo: ProfissiogramaGrupo;
    private criterios: Array<Criterio>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $opcional(): boolean {
        return this.opcional;
    }

    public get $exame(): Exame {
        return this.exame;
    }

    public get $profissiogramaGrupo(): ProfissiogramaGrupo {
        return this.profissiogramaGrupo;
    }

    public get $criterios(): Array<Criterio> {
        return this.criterios;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $opcional(value: boolean) {
        this.opcional = value;
    }

    public set $exame(value: Exame) {
        this.exame = value;
    }

    public set $profissiogramaGrupo(value: ProfissiogramaGrupo) {
        this.profissiogramaGrupo = value;
    }

    public set $criterios(value: Array<Criterio>) {
        this.criterios = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
