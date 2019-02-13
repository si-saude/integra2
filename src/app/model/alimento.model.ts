import { Helper } from './../generic/helper';

import { AlimentoMedidaCaseira } from './alimento-medida-caseira.model';

export class Alimento {
    private id: number;
    private nome: string;
    private alimentosMedidaCaseira: Array<AlimentoMedidaCaseira>;
    private substituicoes: Array<Alimento>;
    private tipo: string;
    private padrao: number;
    private energia: number;
    private proteina: number;
    private lipideos: number;
    private saturada: number;
    private monoinsaturada: number;
    private poliinsaturada: number;
    private omega6: number;
    private omega3: number;
    private colesterol: number;
    private cho: number;
    private fibra: number;
    private calcio: number;
    private mg: number;
    private mn: number;
    private p: number;
    private ferro: number;
    private sodio: number;
    private potassio: number;
    private cobre: number;
    private zinco: number;
    private retinol: number;
    private tiamina: number;
    private riboflavina: number;
    private piridoxina: number;
    private niacina: number;
    private vitc: number;
    private vitd: number;
    private vite: number;
    private inativo: boolean;

    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $alimentosMedidaCaseira(): Array<AlimentoMedidaCaseira> {
        return this.alimentosMedidaCaseira;
    }

    public get $substituicoes(): Array<Alimento> {
        return this.substituicoes;
    }

    public get $tipo(): string {
        return this.tipo;
    }

    public get $padrao(): number {
        return this.padrao;
    }

    public get $energia(): number {
        return this.energia;
    }

    public get $proteina(): number {
        return this.proteina;
    }

    public get $lipideos(): number {
        return this.lipideos;
    }

    public get $saturada(): number {
        return this.saturada;
    }

    public get $monoinsaturada(): number {
        return this.monoinsaturada;
    }

    public get $poliinsaturada(): number {
        return this.poliinsaturada;
    }

    public get $omega6(): number {
        return this.omega6;
    }

    public get $omega3(): number {
        return this.omega3;
    }

    public get $colesterol(): number {
        return this.colesterol;
    }

    public get $cho(): number {
        return this.cho;
    }

    public get $fibra(): number {
        return this.fibra;
    }

    public get $calcio(): number {
        return this.calcio;
    }

    public get $mg(): number {
        return this.mg;
    }

    public get $mn(): number {
        return this.mn;
    }

    public get $p(): number {
        return this.p;
    }

    public get $ferro(): number {
        return this.ferro;
    }

    public get $sodio(): number {
        return this.sodio;
    }

    public get $potassio(): number {
        return this.potassio;
    }

    public get $cobre(): number {
        return this.cobre;
    }

    public get $zinco(): number {
        return this.zinco;
    }

    public get $retinol(): number {
        return this.retinol;
    }

    public get $tiamina(): number {
        return this.tiamina;
    }

    public get $riboflavina(): number {
        return this.riboflavina;
    }

    public get $piridoxina(): number {
        return this.piridoxina;
    }

    public get $niacina(): number {
        return this.niacina;
    }

    public get $vitc(): number {
        return this.vitc;
    }

    public get $vitd(): number {
        return this.vitd;
    }

    public get $vite(): number {
        return this.vite;
    }

    public get $inativo(): boolean {
        return this.inativo;
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

    public set $alimentosMedidaCaseira(value: Array<AlimentoMedidaCaseira>) {
        this.alimentosMedidaCaseira = value;
    }

    public set $substituicoes(value: Array<Alimento>) {
        this.substituicoes = value;
    }

    public set $tipo(value: string) {
        this.tipo = value;
    }

    public set $padrao(value: number) {
        this.padrao = Helper.validateNumber(value);
    }

    public set $energia(value: number) {
        this.energia = Helper.validateNumber(value);
    }

    public set $proteina(value: number) {
        this.proteina = Helper.validateNumber(value);
    }

    public set $lipideos(value: number) {
        this.lipideos = Helper.validateNumber(value);
    }

    public set $saturada(value: number) {
        this.saturada = Helper.validateNumber(value);
    }

    public set $monoinsaturada(value: number) {
        this.monoinsaturada = Helper.validateNumber(value);
    }

    public set $poliinsaturada(value: number) {
        this.poliinsaturada = Helper.validateNumber(value);
    }

    public set $omega6(value: number) {
        this.omega6 = Helper.validateNumber(value);
    }

    public set $omega3(value: number) {
        this.omega3 = Helper.validateNumber(value);
    }

    public set $colesterol(value: number) {
        this.colesterol = Helper.validateNumber(value);
    }

    public set $cho(value: number) {
        this.cho = Helper.validateNumber(value);
    }

    public set $fibra(value: number) {
        this.fibra = Helper.validateNumber(value);
    }

    public set $calcio(value: number) {
        this.calcio = Helper.validateNumber(value);
    }

    public set $mg(value: number) {
        this.mg = Helper.validateNumber(value);
    }

    public set $mn(value: number) {
        this.mn = Helper.validateNumber(value);
    }

    public set $p(value: number) {
        this.p = Helper.validateNumber(value);
    }

    public set $ferro(value: number) {
        this.ferro = Helper.validateNumber(value);
    }

    public set $sodio(value: number) {
        this.sodio = Helper.validateNumber(value);
    }

    public set $potassio(value: number) {
        this.potassio = Helper.validateNumber(value);
    }

    public set $cobre(value: number) {
        this.cobre = Helper.validateNumber(value);
    }

    public set $zinco(value: number) {
        this.zinco = Helper.validateNumber(value);
    }

    public set $retinol(value: number) {
        this.retinol = Helper.validateNumber(value);
    }

    public set $tiamina(value: number) {
        this.tiamina = Helper.validateNumber(value);
    }

    public set $riboflavina(value: number) {
        this.riboflavina = Helper.validateNumber(value);
    }

    public set $piridoxina(value: number) {
        this.piridoxina = Helper.validateNumber(value);
    }

    public set $niacina(value: number) {
        this.niacina = Helper.validateNumber(value);
    }

    public set $vitc(value: number) {
        this.vitc = Helper.validateNumber(value);
    }

    public set $vitd(value: number) {
        this.vitd = Helper.validateNumber(value);
    }

    public set $vite(value: number) {
        this.vite = Helper.validateNumber(value);
    }

    public set $inativo(value: boolean) {
        this.inativo = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
