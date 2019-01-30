import { GenericFilter } from './../generic/generic-filter';

export class RiscoGheFilter extends GenericFilter {
    private titulo: string;

    public get $titulo(): string {
        return this.titulo;
    }

    public set $titulo(value: string) {
        this.titulo = value;
    }
}
