import { GenericFilter } from './../generic/generic-filter';

import { CheckinFilter } from './checkin.filter';
import { FilaAtendimentoFilter } from './fila-atendimento.filter';
import { TarefaFilter } from './tarefa.filter';

export class AtendimentoFilter extends GenericFilter {
    private checkin: CheckinFilter;
    private tarefa: TarefaFilter;
    private fila: FilaAtendimentoFilter;
    
    public get $checkin(): CheckinFilter {
        return this.checkin;
    }

    public set $checkin(value: CheckinFilter) {
        this.checkin = value;
    }

    public get $tarefa(): TarefaFilter {
        return this.tarefa;
    }

    public set $tarefa(value: TarefaFilter) {
        this.tarefa = value;
    }

    public get $fila(): FilaAtendimentoFilter {
        return this.fila;
    }

    public set $fila(value: FilaAtendimentoFilter) {
        this.fila = value;
    }
}
