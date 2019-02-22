import { DateFilter } from './../generic/date-filter';
import { GenericFilter } from './../generic/generic-filter';

import { EmpregadoFilter } from './empregado.filter';
import { EquipeFilter } from './equipe.filter';
import { ProfissionalFilter } from './profissional.filter';
import { ServicoFilter } from './servico.filter';

export class TarefaFilter extends GenericFilter {
    private status: string;
    private inicio: DateFilter;
    private fim: DateFilter;
    private cliente: EmpregadoFilter;
    private equipe: EquipeFilter;
    private responsavel: ProfissionalFilter;
    private servico: ServicoFilter;

    public get $status(): string {
        return this.status;
    }

    public get $inicio(): DateFilter {
        return this.inicio;
    }

    public get $fim(): DateFilter {
        return this.fim;
    }

    public get $cliente(): EmpregadoFilter {
        return this.cliente;
    }

    public get $equipe(): EquipeFilter {
        return this.equipe;
    }

    public get $responsavel(): ProfissionalFilter {
        return this.responsavel;
    }

    public get $servico(): ServicoFilter {
        return this.servico;
    }

    public set $status(value: string) {
        this.status = value;
    }

    public set $inicio(value: DateFilter) {
        this.inicio = value;
    }

    public set $fim(value: DateFilter) {
        this.fim = value;
    }

    public set $cliente(value: EmpregadoFilter) {
        this.cliente = value;
    }

    public set $equipe(value: EquipeFilter) {
        this.equipe = value;
    }

    public set $responsavel(value: ProfissionalFilter) {
        this.responsavel = value;
    }

    public set $servico(value: ServicoFilter) {
        this.servico = value;
    }
}
