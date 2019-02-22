import { BooleanFilter } from '../generic/boolean-filter';
import { GenericFilter } from '../generic/generic-filter';

import { EmpregadoFilter } from './empregado.filter';

export class ProfissionalFilter extends GenericFilter {
    private empregado: EmpregadoFilter;

    public get $empregado(): EmpregadoFilter {
        return this.empregado;
    }

    public set $empregado(value: EmpregadoFilter) {
        this.empregado = value;
    }
}