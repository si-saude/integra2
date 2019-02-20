import { BooleanFilter } from '../generic/boolean-filter';
import { DateFilter } from '../generic/date-filter';
import { GenericFilter } from '../generic/generic-filter';

export class PessoaFilter extends GenericFilter {
    private nome: string;
    private cpf: string;
    private sexo: string;
    private dataNascimento: DateFilter;

    public get $nome(): string {
        return this.nome;
    }

    public get $cpf(): string {
        return this.cpf;
    }

    public get $sexo(): string {
        return this.sexo;
    }

    public get $dataNascimento(): DateFilter {
        return this.dataNascimento;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $cpf(value: string) {
        this.cpf = value;
    }

    public set $sexo(value: string) {
        this.sexo = value;
    }

    public set $dataNascimento(value: DateFilter) {
        this.dataNascimento = value;
    }
}
