import { GenericFilter } from './../generic/generic-filter';

import { BaseFilter } from './base.filter';

export class LocalizacaoFilter extends GenericFilter {
    private nome: string;
    private base: BaseFilter;

    public get $nome(): string {
        return this.nome;
    }

    public get $base(): BaseFilter {
        return this.base;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $base(value: BaseFilter) {
        this.base = value;
    }
}
