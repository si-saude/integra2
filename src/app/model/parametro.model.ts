import { Equipe } from './equipe.model';
import { RegraAtendimento } from './regra-atendimento.model';

export class Parametro {
    private id: number;
    private regraPeriodico: RegraAtendimento;
    private acolhimento: Equipe;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $regraPeriodico(): RegraAtendimento {
        return this.regraPeriodico;
    }

    public get $acolhimento(): Equipe {
        return this.acolhimento;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $regraPeriodico(value: RegraAtendimento) {
        this.regraPeriodico = value;
    }

    public set $acolhimento(value: Equipe) {
        this.acolhimento = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
