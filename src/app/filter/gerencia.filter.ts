import { GenericFilter } from './../generic/generic-filter';
import { BooleanFilter } from 'app/generic/boolean-filter';

export class GerenciaFilter extends GenericFilter {
    private descricao: string;
    private codigoCompleto: string;
    private ausentePeriodico: BooleanFilter;

    public get $descricao(): string {
        return this.descricao;
    }

    public get $codigoCompleto(): string {
        return this.codigoCompleto;
    }

    public get $ausentePeriodico(): BooleanFilter {
        return this.ausentePeriodico;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }

    public set $codigoCompleto(value: string) {
        this.codigoCompleto = value;
    }

    public set $ausentePeriodico(value: BooleanFilter) {
        this.ausentePeriodico = value;
    }
}
