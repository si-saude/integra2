import { Helper } from './../generic/helper';

import { Avaliacao } from './avaliacao.model';
import { TipoGrupoMonitoramento } from './tipo-grupo-monitoramento.model';

export class GrupoMonitoramento {
    private id: number;
    private nome: string;
    private recorrente: boolean;
    private relatorio: boolean;
    private auditoriaAso: boolean;
    private tipoGrupoMonitoramento: TipoGrupoMonitoramento;
    private avaliacoes: Array<Avaliacao>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $recorrente(): boolean {
        return this.recorrente;
    }

    public get $relatorio(): boolean {
        return this.relatorio;
    }

    public get $auditoriaAso(): boolean {
        return this.auditoriaAso;
    }

    public get $tipoGrupoMonitoramento(): TipoGrupoMonitoramento {
        return this.tipoGrupoMonitoramento;
    }

    public get $avaliacoes(): Array<Avaliacao> {
        return this.avaliacoes;
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

    public set $recorrente(value: boolean) {
        this.recorrente = value;
    }

    public set $relatorio(value: boolean) {
        this.relatorio = value;
    }

    public set $auditoriaAso(value: boolean) {
        this.auditoriaAso = value;
    }

    public set $tipoGrupoMonitoramento(value: TipoGrupoMonitoramento) {
        this.tipoGrupoMonitoramento = value;
    }

    public set $avaliacoes(value: Array<Avaliacao>) {
        this.avaliacoes = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
