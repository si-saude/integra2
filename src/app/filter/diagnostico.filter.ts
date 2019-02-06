import { GenericFilter } from './../generic/generic-filter';
import { BooleanFilter } from './../generic/boolean-filter';

import { EixoFilter } from './eixo.filter';

export class DiagnosticoFilter extends GenericFilter {
    private codigo: string;
    private descricao: string;
    private inativo: BooleanFilter;
    private eixo: EixoFilter;

    public get $codigo(): string {
        return this.codigo;
    }

    public get $descricao(): string {
        return this.descricao;
    }

    public get $inativo(): BooleanFilter {
        return this.inativo;
    }

    public get $eixo(): EixoFilter {
        return this.eixo;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }

    public set $inativo(value: BooleanFilter) {
        this.inativo = value;
    }

    public set $eixo(value: EixoFilter) {
        this.eixo = value;
    }
}
