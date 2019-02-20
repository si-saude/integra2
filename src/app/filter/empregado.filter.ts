import { BooleanFilter } from '../generic/boolean-filter';
import { GenericFilter } from '../generic/generic-filter';

import { BaseFilter } from './base.filter';
import { CargoFilter } from './cargo.filter';
import { EnfaseFilter } from './enfase.filter';
import { FuncaoFilter } from './funcao.filter';
import { GerenciaFilter } from './gerencia.filter';
import { GheFilter } from './ghe.filter';
import { GheeFilter } from './ghee.filter';
import { PessoaFilter } from './pessoa.filter';
import { RegimeFilter } from './regime.filter';

export class EmpregadoFilter extends GenericFilter {
    private chave: string;
    private matricula: string;
    private status: string;
    private vinculo: string;
    private inativo: BooleanFilter;

    private pessoa: PessoaFilter;
    private cargo: CargoFilter;
    private funcao: FuncaoFilter;
    private enfase: EnfaseFilter;
    private regime: RegimeFilter;
    private gerencia: GerenciaFilter;
    private base: BaseFilter;
    private ghe: GheFilter;
    private ghee: GheeFilter;


    public get $chave(): string {
        return this.chave;
    }

    public get $matricula(): string {
        return this.matricula;
    }

    public get $status(): string {
        return this.status;
    }

    public get $inativo(): BooleanFilter {
        return this.inativo;
    }

    public get $vinculo(): string {
        return this.vinculo;
    }

    public get $pessoa(): PessoaFilter {
        return this.pessoa;
    }

    public get $cargo(): CargoFilter {
        return this.cargo;
    }

    public get $funcao(): FuncaoFilter {
        return this.funcao;
    }

    public get $enfase(): EnfaseFilter {
        return this.enfase;
    }

    public get $regime(): RegimeFilter {
        return this.regime;
    }

    public get $gerencia(): GerenciaFilter {
        return this.gerencia;
    }

    public get $base(): BaseFilter {
        return this.base;
    }

    public get $ghe(): GheFilter {
        return this.ghe;
    }

    public get $ghee(): GheeFilter {
        return this.ghee;
    }

    public set $chave(value: string) {
        this.chave = value;
    }

    public set $matricula(value: string) {
        this.matricula = value;
    }

    public set $status(value: string) {
        this.status = value;
    }

    public set $vinculo(value: string) {
        this.vinculo = value;
    }

    public set $inativo(value: BooleanFilter) {
        this.inativo = value;
    }

    public set $pessoa(value: PessoaFilter) {
        this.pessoa = value;
    }

    public set $cargo(value: CargoFilter) {
        this.cargo = value;
    }

    public set $funcao(value: FuncaoFilter) {
        this.funcao = value;
    }

    public set $enfase(value: EnfaseFilter) {
        this.enfase = value;
    }

    public set $regime(value: RegimeFilter) {
        this.regime = value;
    }

    public set $gerencia(value: GerenciaFilter) {
        this.gerencia = value;
    }

    public set $base(value: BaseFilter) {
        this.base = value;
    }

    public set $ghe(value: GheFilter) {
        this.ghe = value;
    }

    public set $ghee(value: GheeFilter) {
        this.ghee = value;
    }
}
