import { AvaliacaoFisica } from './avaliacao-fisica.model';
import { Checkin } from './checkin.model';
import { FilaAtendimento } from './fila-atendimento.model';
import { Tarefa } from './tarefa.model';
import { Triagem } from './triagem.model';
import { AtendimentoAtividadeFisica } from './atendimento-atividade-fisica.model';

export class Atendimento {
    private id: number;
    private fila: FilaAtendimento;
    private tarefa: Tarefa;
    private checkin: Checkin;
    private avaliacaoFisica: AvaliacaoFisica;
    private triagens: Array<Triagem>;
    private acolhimento: boolean;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $fila(): FilaAtendimento {
        return this.fila;
    }

    public get $tarefa(): Tarefa {
        return this.tarefa;
    }

    public get $checkin(): Checkin {
        return this.checkin;
    }

    public get $avaliacaoFisica(): AvaliacaoFisica {
        return this.avaliacaoFisica;
    }

    public get $triagens(): Array<Triagem> {
        return this.triagens;
    }

    public get $acolhimento(): boolean {
        return this.acolhimento;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $fila(value: FilaAtendimento) {
        this.fila = value;
    }

    public set $tarefa(value: Tarefa) {
        this.tarefa = value;
    }

    public set $checkin(value: Checkin) {
        this.checkin = value;
    }

    public set $avaliacaoFisica(value: AvaliacaoFisica) {
        this.avaliacaoFisica = value;
    }

    public set $triagens(value: Array<Triagem>) {
        this.triagens = value;
    }

    public set $acolhimento(value: boolean) {
        this.acolhimento = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
