import { DateFilter } from './../generic/date-filter';
import { GenericFilter } from './../generic/generic-filter';

import { LocalizacaoFilter } from './localizacao.filter';
import { ProfissionalFilter } from './profissional.filter';

export class FilaAtendimentoFilter extends GenericFilter {
    private data: DateFilter;
    private localizacao: LocalizacaoFilter;
    private profissional: ProfissionalFilter;
    private status: string;

    public get $data(): DateFilter {
        return this.data;
    }

    public set $data(value: DateFilter) {
        this.data = value;
    }

    public get $localizacao(): LocalizacaoFilter {
        return this.localizacao;
    }

    public set $localizacao(value: LocalizacaoFilter) {
        this.localizacao = value;
    }

    public get $profissional(): ProfissionalFilter {
        return this.profissional;
    }

    public set $profissional(value: ProfissionalFilter) {
        this.profissional = value;
    }

    public get $status(): string {
        return this.status;
    }

    public set $status(value: string) {
        this.status = value;
    }
}
