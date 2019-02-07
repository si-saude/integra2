import { Helper } from './../generic/helper';

import { IndicadorAssociadoSast } from './indicador-associado-sast.model';
import { Equipe } from './equipe.model';

export class IndicadorSast {
    private id: number;
    private nome: string;
    private indice0: string;
    private indice1: string;
    private indice2: string;
    private indice3: string;
    private indice4: string;
    private obrigatorio: boolean;
    private ausenteCalculoInterdisciplinar: boolean;
    private inativo: boolean;
    private codigo: string;
    private codigoExcludente: string;
    private critico = -1;
    private equipe: Equipe;
    private indicadorAssociadoSasts: Array<IndicadorAssociadoSast>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $indice0(): string {
        return this.indice0;
    }

    public get $indice1(): string {
        return this.indice1;
    }
    public get $indice2(): string {
        return this.indice2;
    }
    public get $indice3(): string {
        return this.indice3;
    }
    public get $indice4(): string {
        return this.indice4;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public get $codigoExcludente(): string {
        return this.codigoExcludente;
    }

    public get $obrigatorio(): boolean {
        return this.obrigatorio;
    }

    public get $ausenteCalculoInterdisciplinar(): boolean {
        return this.ausenteCalculoInterdisciplinar;
    }

    public get $inativo(): boolean {
        return this.inativo;
    }

    public get $critico(): number {
        return this.critico;
    }

    public get $equipe(): Equipe {
        return this.equipe;
    }

    public get $indicadorAssociadoSasts(): Array<IndicadorAssociadoSast> {
        return this.indicadorAssociadoSasts;
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

    public set $indice0(indice0: string) {
        this.indice0 = indice0;
    }

    public set $indice1(indice1: string) {
        this.indice1 = indice1;
    }

    public set $indice2(indice2: string) {
        this.indice2 = indice2;
    }

    public set $indice3(indice3: string) {
        this.indice3 = indice3;
    }

    public set $indice4(indice4: string) {
        this.indice4 = indice4;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public set $codigoExcludente(value: string) {
        this.codigoExcludente = value;
    }

    public set $obrigatorio(value: boolean) {
        this.obrigatorio = value;
    }

    public set $ausenteCalculoInterdisciplinar(value: boolean) {
        this.ausenteCalculoInterdisciplinar = value;
    }

    public set $inativo(value: boolean) {
        this.inativo = value;
    }

    public set $critico(value: number) {
        this.critico = Helper.validateNumber(value);
    }

    public set $equipe(value: Equipe) {
        this.equipe = value;
    }

    public set $indicadorAssociadoSasts(value: Array<IndicadorAssociadoSast>) {
        this.indicadorAssociadoSasts = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
