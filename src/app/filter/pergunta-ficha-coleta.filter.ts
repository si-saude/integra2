import { GenericFilter } from './../generic/generic-filter';
import { BooleanFilter } from './../generic/boolean-filter';


import { GrupoPerguntaFichaColetaFilter } from './grupo-pergunta-ficha-coleta.filter';

export class PerguntaFichaColetaFilter extends GenericFilter {
    private grupo: GrupoPerguntaFichaColetaFilter;
    private tipo: string;
    private codigo: string;
	private path: string;
	private inativo: BooleanFilter;
	private obrigatorio: BooleanFilter;

    public get $tipo(): string {
        return this.tipo;
    }

    public set $tipo(value: string) {
        this.tipo = value;
    }

	public get $codigo(): string {
		return this.codigo;
	}

	public get $path(): string {
		return this.path;
	}

	public get $inativo(): BooleanFilter {
		return this.inativo;
	}

	public get $obrigatorio(): BooleanFilter {
		return this.obrigatorio;
	}

	public get $grupo(): GrupoPerguntaFichaColetaFilter {
		return this.grupo;
	}

	public set $codigo(value: string) {
		this.codigo = value;
	}

	public set $path(value: string) {
		this.path = value;
	}

	public set $inativo(value: BooleanFilter) {
		this.inativo = value;
	}

	public set $obrigatorio(value: BooleanFilter) {
		this.obrigatorio = value;
	}

	public set $grupo(value: GrupoPerguntaFichaColetaFilter) {
		this.grupo = value;
	}
}
