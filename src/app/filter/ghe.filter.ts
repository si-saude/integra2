import { GenericFilter } from './../generic/generic-filter';
import { DateFilter } from './../generic/date-filter';
import { RiscoGheFilter } from './risco-ghe.filter';

export class GheFilter extends GenericFilter {
    private nome: string;
    private codigo: string;
    private dataCriacao: DateFilter;
    private dataDesativacao: DateFilter;
    private descricao: string;
    private descricaoAmbiente: string;
    private descricaoTarefas: string;
    private duracaoJornada: number;
    private risco: RiscoGheFilter;

    public get $nome(): string {
        return this.nome;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

	public get $codigo(): string {
		return this.codigo;
	}

	public get $dataCriacao(): DateFilter {
		return this.dataCriacao;
	}

	public get $dataDesativacao(): DateFilter {
		return this.dataDesativacao;
	}

	public get $descricao(): string {
		return this.descricao;
	}

	public get $descricaoAmbiente(): string {
		return this.descricaoAmbiente;
	}

	public get $descricaoTarefas(): string {
		return this.descricaoTarefas;
	}

	public get $duracaoJornada(): number {
		return this.duracaoJornada;
	}

	public get $risco(): RiscoGheFilter {
		return this.risco;
	}

	public set $codigo(value: string) {
		this.codigo = value;
	}

	public set $dataCriacao(value: DateFilter) {
		this.dataCriacao = value;
	}

	public set $dataDesativacao(value: DateFilter) {
		this.dataDesativacao = value;
	}

	public set $descricao(value: string) {
		this.descricao = value;
	}

	public set $descricaoAmbiente(value: string) {
		this.descricaoAmbiente = value;
	}

	public set $descricaoTarefas(value: string) {
		this.descricaoTarefas = value;
	}

	public set $duracaoJornada(value: number) {
		this.duracaoJornada = value;
	}

	public set $risco(value: RiscoGheFilter) {
		this.risco = value;
	}

}
