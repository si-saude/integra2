import { Helper } from './../generic/helper';

import { RiscoGhe } from './risco-ghe.model';

export class Ghe {
    private id: number;
    private nome: string;
    private codigo: string;
    private descricao: string;
    private descricaoAmbiente: string;
    private descricaoTarefas: string;
    private duracaoJornada: number;
    private risco: RiscoGhe;
    private version: number;

    private dataCriacao: number;
    private dataCriacaoFront: string;

    private dataDesativacao: number;
    private dataDesativacaoFront: string;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $codigo(): string {
        return this.codigo;
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

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $nome(value: string) {
        this.nome = value;
    }

    public set $codigo(value: string) {
        this.codigo = value;
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

    public set $version(value: number) {
        this.version = value;
    }

	public get $duracaoJornada(): number {
		return this.duracaoJornada;
	}

	public get $risco(): RiscoGhe {
		return this.risco;
	}

	public set $duracaoJornada(value: number) {
		this.duracaoJornada = Helper.validateNumber(value);
	}

	public set $risco(value: RiscoGhe) {
		this.risco = value;
	}

	public get $dataCriacao(): number {
		return this.dataCriacao;
	}

	public get $dataCriacaoFront(): string {
		return this.dataCriacaoFront;
	}

	public set $dataCriacao(value: number) {
		this.dataCriacao = value;
	}

	public set $dataCriacaoFront(value: string) {
		this.dataCriacaoFront = value;
    }
    
    public set $dataDesativacao(value: number) {
		this.dataDesativacao = value;
	}

	public set $dataDesativacaoFront(value: string) {
		this.dataDesativacaoFront = value;
	}
}
