import { GrupoMonitoramento } from './grupo-monitoramento.model';

export class Avaliacao {
    private id: number;
    private nome: string;
    private auditoriaAso = false;
    private auditoriaMedico = false;
    private grupoMonitoramento: GrupoMonitoramento;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $auditoriaAso(): boolean {
        return this.auditoriaAso;
    }

    public get $auditoriaMedico(): boolean {
        return this.auditoriaMedico;
    }

    public get $grupoMonitoramento(): GrupoMonitoramento {
        return this.grupoMonitoramento;
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

    public set $auditoriaAso(value: boolean) {
        this.auditoriaAso = value;
    }

    public set $auditoriaMedico(value: boolean) {
        this.auditoriaMedico = value;
    }

    public set $grupoMonitoramento(value: GrupoMonitoramento) {
        this.grupoMonitoramento = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
