import { Checkin } from './checkin.model';
import { FilaAtendimento } from './fila-atendimento.model';
import { Tarefa } from './tarefa.model';

export class Atendimento {
    private id: number;
    private fila: FilaAtendimento;
    private tarefa: Tarefa;
    private checkin: Checkin;
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

    public set $version(value: number) {
        this.version = value;
    }
}
