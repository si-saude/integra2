import { Base } from './base.model';
import { Cargo } from './cargo.model';
import { Enfase } from './enfase.model';
import { Funcao } from './funcao.model';
import { Gerencia } from './gerencia.model';
import { Ghe } from './ghe.model';
import { Ghee } from './ghee.model';
import { GrupoMonitoramento } from './grupo-monitoramento.model';
import { Pessoa } from './pessoa.model';
import { Regime } from './regime.model';

export class Empregado {
    private id: number;
    private chave: string;
    private matricula: string;
    private ramal: string;
    private status: string;
    private estadoCivil: string;
    private escolaridade: string;
    private pis: string;
    private email: string;
    private vinculo: string;
    private foto: string;
    private version: number;

    private pessoa: Pessoa;
    private cargo: Cargo;
    private funcao: Funcao;
    private enfase: Enfase;
    private regime: Regime;
    private gerencia: Gerencia;
    private base: Base;
    private ghe: Ghe;
    private ghee: Ghee;
    private grupoMonitoramentos: Array<GrupoMonitoramento>;

    private dataAdmissao: number;
    private dataAdmissaoFront: string;

    public get $id(): number {
        return this.id;
    }

    public get $chave(): string {
        return this.chave;
    }

    public get $matricula(): string {
        return this.matricula;
    }

    public get $ramal(): string {
        return this.ramal;
    }

    public get $status(): string {
        return this.status;
    }

    public get $estadoCivil(): string {
        return this.estadoCivil;
    }

    public get $escolaridade(): string {
        return this.escolaridade;
    }

    public get $pis(): string {
        return this.pis;
    }

    public get $email(): string {
        return this.email;
    }

    public get $vinculo(): string {
        return this.vinculo;
    }

    public get $foto(): string {
        return this.foto;
    }

    public get $version(): number {
        return this.version;
    }

    public get $pessoa(): Pessoa {
        return this.pessoa;
    }

    public get $cargo(): Cargo {
        return this.cargo;
    }

    public get $funcao(): Funcao {
        return this.funcao;
    }

    public get $enfase(): Enfase {
        return this.enfase;
    }

    public get $regime(): Regime {
        return this.regime;
    }

    public get $gerencia(): Gerencia {
        return this.gerencia;
    }

    public get $base(): Base {
        return this.base;
    }

    public get $ghe(): Ghe {
        return this.ghe;
    }

    public get $ghee(): Ghee {
        return this.ghee;
    }

    public get $grupoMonitoramentos(): Array<GrupoMonitoramento> {
        return this.grupoMonitoramentos;
    }

    public get $dataAdmissao(): number {
        return this.dataAdmissao;
    }

    public get $dataAdmissaoFront(): string {
        return this.dataAdmissaoFront;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $chave(value: string){
        this.chave = value;
    }

    public set $matricula(value: string){
        this.matricula = value;
    }

    public set $ramal(value: string){
        this.ramal = value;
    }

    public set $status(value: string){
        this.status = value;
    }

    public set $estadoCivil(value: string){
        this.estadoCivil = value;
    }

    public set $escolaridade(value: string){
        this.escolaridade = value;
    }

    public set $pis(value: string){
        this.pis = value;
    }

    public set $email(value: string){
        this.email = value;
    }

    public set $vinculo(value: string){
        this.vinculo = value;
    }

    public set $foto(value: string){
        this.foto = value;
    }

    public set $version(value: number) {
        this.version = value;
    }

    public set $pessoa(value: Pessoa) {
        this.pessoa = value;
    }

    public set $cargo(value: Cargo) {
        this.cargo = value;
    }

    public set $funcao(value: Funcao) {
        this.funcao = value;
    }

    public set $enfase(value: Enfase) {
        this.enfase = value;
    }

    public set $regime(value: Regime) {
        this.regime = value;
    }

    public set $gerencia(value: Gerencia) {
        this.gerencia = value;
    }

    public set $base(value: Base) {
        this.base = value;
    }

    public set $ghe(value: Ghe) {
        this.ghe = value;
    }

    public set $ghee(value: Ghee) {
        this.ghee = value;
    }

    public set $grupoMonitoramentos(value: Array<GrupoMonitoramento>) {
        this.grupoMonitoramentos = value;
    }

    public set $dataAdmissao(value: number) {
        this.dataAdmissao = value;
    }

    public set $dataAdmissaoFront(value: string) {
        this.dataAdmissaoFront = value;
    }
}
