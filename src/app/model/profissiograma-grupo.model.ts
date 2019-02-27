import { GrupoMonitoramento } from './grupo-monitoramento.model';
import { Profissiograma } from './profissiograma.model';
import { ProfissiogramaExame } from './profissiograma-exame.model';

export class ProfissiogramaGrupo {
    private id: number;
    private grupoMonitoramento: GrupoMonitoramento;
    private profissiograma: Profissiograma;
    private profissiogramaExames: Array<ProfissiogramaExame>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $grupoMonitoramento(): GrupoMonitoramento {
        return this.grupoMonitoramento;
    }

    public get $profissiograma(): Profissiograma {
        return this.profissiograma;
    }

    public get $profissiogramaExames(): Array<ProfissiogramaExame> {
        return this.profissiogramaExames;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $grupoMonitoramento(value: GrupoMonitoramento){
        this.grupoMonitoramento = value;
    }

    public set $profissiograma(value: Profissiograma){
        this.profissiograma = value;
    }

    public set $profissiogramaExames(value: Array<ProfissiogramaExame>){
        this.profissiogramaExames = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
