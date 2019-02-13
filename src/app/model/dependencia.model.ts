import { Equipe } from './equipe.model';
import { RegraAtendimentoEquipe } from './regra-atendimento-equipe.model';

export class Dependencia {
    private id: number;
    private equipe: Equipe;
    private regraAtendimentoEquipe: RegraAtendimentoEquipe;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $equipe(): Equipe {
        return this.equipe;
    }

    public get $regraAtendimentoEquipe(): RegraAtendimentoEquipe {
        return this.regraAtendimentoEquipe;
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

    public set $regraAtendimentoEquipe(value: RegraAtendimentoEquipe) {
        this.regraAtendimentoEquipe = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
