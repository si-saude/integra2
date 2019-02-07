import { GenericFilter } from '../generic/generic-filter';
import { BooleanFilter } from '../generic/boolean-filter';

import { EquipeFilter } from './equipe.filter';

export class IntervencaoFilter extends GenericFilter {
    private descricao: string;
    private equipe: EquipeFilter;
    private inativo: BooleanFilter;

    public get $descricao(): string {
        return this.descricao;
    }

    public get $equipe(): EquipeFilter {
        return this.equipe;
    }

    public get $inativo(): BooleanFilter {
        return this.inativo;
    }

    public set $descricao(value: string) {
        this.descricao = value;
    }

    public set $equipe(value: EquipeFilter) {
        this.equipe = value;
    }

    public set $inativo(value: BooleanFilter) {
        this.inativo = value;
    }
}
