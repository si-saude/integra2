import { GenericFilter } from './../generic/generic-filter';

import { EquipeFilter } from './equipe.filter';

export class EixoFilter extends GenericFilter {
    private titulo: string;
    private equipe: EquipeFilter;

    public get $titulo(): string {
        return this.titulo;
    }

    public get $equipe(): EquipeFilter {
        return this.equipe;
    }

    public set $titulo(value: string) {
        this.titulo = value;
    }

    public set $equipe(value: EquipeFilter) {
        this.equipe = value;
    }
}
