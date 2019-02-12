import { RegraAtendimentoEquipe } from './regra-atendimento-equipe.model';

export class RegraAtendimento {
    private id: number;
    private nome: string;
    private regraAtendimentoEquipes: Array<RegraAtendimentoEquipe>;
    private version: number;

    public get $id(): number {
        return this.id;
    }

    public get $nome(): string {
        return this.nome;
    }

    public get $regraAtendimentoEquipes(): Array<RegraAtendimentoEquipe> {
        return this.regraAtendimentoEquipes;
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

    public set $regraAtendimentoEquipes(value: Array<RegraAtendimentoEquipe>) {
        this.regraAtendimentoEquipes = value;
    }

    public set $version(value: number) {
        this.version = value;
    }
}
