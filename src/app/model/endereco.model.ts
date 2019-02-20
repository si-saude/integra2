
import { Cidade } from './cidade.model';

export class Endereco {
    private id: number;
    private logradouro: string;
    private numero: string;
    private complemento: string;
    private bairro: string;
    private cep: string;
    private cidade: Cidade;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $logradouro(): string {
        return this.logradouro;
    }

    public get $numero(): string {
        return this.numero;
    }

    public get $complemento(): string {
        return this.complemento;
    }

    public get $bairro(): string {
        return this.bairro;
    }

    public get $cep(): string {
        return this.cep;
    }

    public get $cidade(): Cidade {
        return this.cidade;
    }

    public get $version(): number {
        return this.version;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $logradouro(value: string){
        this.logradouro = value;
    }

    public set $numero(value: string){
        this.numero = value;
    }

    public set $complemento(value: string){
        this.complemento = value;
    }

    public set $bairro(value: string){
        this.bairro = value;
    }

    public set $cep(value: string){
        this.cep = value;
    }

    public set $cidade(value: Cidade){
        this.cidade = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
