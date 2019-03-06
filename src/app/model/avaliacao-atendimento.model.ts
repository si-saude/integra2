import { Checkin } from './checkin.model';
import { Questionario } from './questionario.model';
import { RespostaAvaliacaoAtendimento } from './resposta-avaliacao-atendimento.model';

export class AvaliacaoAtendimento {
    private id: number;
    private status: string;
    private checkin: Checkin;
    private questionario: Questionario;
    private respostas: Array<RespostaAvaliacaoAtendimento>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $status(): string {
        return this.status;
    }

    public get $checkin(): Checkin {
        return this.checkin;
    }

    public get $questionario(): Questionario {
        return this.questionario;
    }

    public get $respostas(): Array<RespostaAvaliacaoAtendimento> {
        return this.respostas;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $status(value: string) {
        this.status = value;
    }

    public set $checkin(value: Checkin) {
        this.checkin = value;
    }

    public set $questionario(value: Questionario) {
        this.questionario = value;
    }

    public set $respostas(value: Array<RespostaAvaliacaoAtendimento>) {
        this.respostas = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
