import { GenericFilter } from './../generic/generic-filter';

import { EmpregadoFilter } from './empregado.filter';
import { EquipeFilter } from './equipe.filter';

export class RiscoPotencialFilter extends GenericFilter {
    private status: string;
    private empregado: EmpregadoFilter;
    private responsavel: EquipeFilter;

    public get $status(): string {
        return this.status;
    }

    public get $empregado(): EmpregadoFilter {
        return this.empregado;
    }

    public get $responsavel(): EquipeFilter {
        return this.responsavel;
    }

    public set $status(value: string) {
        this.status = value;
    }

    public set $empregado(value: EmpregadoFilter) {
        this.empregado = value;
    }

    public set $responsavel(value: EquipeFilter) {
        this.responsavel = value;
    }
}
