import { GenericFilter } from './../generic/generic-filter';

import { ExameFilter } from './exame.filter';

export class CampoExameFilter extends GenericFilter {
    private codigo: string;
    private titulo: string;
    private exame: ExameFilter;

    public get $codigo(): string {
        return this.codigo;
    }

    public get $titulo(): string {
        return this.titulo;
    }

    public get $exame(): ExameFilter {
        return this.exame;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $titulo(value: string) {
        this.titulo = value;
    }

    public set $exame(value: ExameFilter) {
        this.exame = value;
    }
}
