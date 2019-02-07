import { GenericFilter } from './../generic/generic-filter';
import { BooleanFilter } from './../generic/boolean-filter';

import { EquipeFilter } from './equipe.filter';

export class IndicadorSastFilter extends GenericFilter {
    private nome: string;
    private codigo: string;
    private equipe: EquipeFilter;
    private obrigatorio: BooleanFilter;
    private ausenteCalculoInterdisciplinar: BooleanFilter;
    private inativo: BooleanFilter;

    public get $nome(): string {
        return this.nome;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $equipe(): EquipeFilter {
        return this.equipe;
    }

    public get $obrigatorio(): BooleanFilter {
        return this.obrigatorio;
    }

    public get $ausenteCalculoInterdisciplinar(): BooleanFilter {
        return this.ausenteCalculoInterdisciplinar;
    }

    public get $inativo(): BooleanFilter {
        return this.inativo;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $equipe(value: EquipeFilter) {
        this.equipe = value;
    }

    public set $obrigatorio(value: BooleanFilter) {
        this.obrigatorio = value;
    }

    public set $ausenteCalculoInterdisciplinar(value: BooleanFilter) {
        this.ausenteCalculoInterdisciplinar = value;
    }

    public set $inativo(value: BooleanFilter) {
        this.inativo = value;
    }
}
