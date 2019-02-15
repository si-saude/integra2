import { GenericFilter } from './../generic/generic-filter';

export class RequisitoAsoFilter extends GenericFilter {
    private conteudo: string;

    public get $conteudo(): string {
        return this.conteudo;
    }

    public set $conteudo(value: string) {
        this.conteudo = value;
    }
}
