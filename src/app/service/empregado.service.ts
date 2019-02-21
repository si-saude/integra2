import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { BaseService } from './base.service';
import { CargoService } from './cargo.service';
import { CidadeService } from './cidade.service';
import { Empregado } from '../model/empregado.model';
import { EmpregadoFilter } from '../filter/empregado.filter';
import { Endereco } from '../model/endereco.model';
import { EnfaseService } from './enfase.service';
import { FuncaoService } from './funcao.service';
import { GerenciaService } from './gerencia.service';
import { GheService } from './ghe.service';
import { GheeService } from './ghee.service';
import { GrupoMonitoramento } from './../model/grupo-monitoramento.model';
import { GrupoMonitoramentoService } from './grupo-monitoramento.service';
import { Pessoa } from '../model/pessoa.model';
import { PessoaFilter } from '../filter/pessoa.filter';
import { RegimeService } from './regime.service';
import { Telefone } from '../model/telefone.model';
import { TipoGrupoMonitoramento } from '../model/tipo-grupo-monitoramento.model';
import { UtilService } from './util.service';

@Injectable()
export class EmpregadoService extends GenericService<Empregado, EmpregadoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService,
        private baseService: BaseService, private cargoService: CargoService,
        private enfaseService: EnfaseService, private funcaoService: FuncaoService,
        private gerenciaService: GerenciaService, private gheService: GheService,
        private gheeService: GheeService, private grupoMonitoramentoService: GrupoMonitoramentoService,
        private regimeService: RegimeService, private cidadeService: CidadeService) {
        super(http, 'empregado', router, dialogService, spinnerService);
    }

    initializeObject() {
        const e = new Empregado();
        e.$pessoa = new Pessoa();
        e.$pessoa.$endereco = new Endereco();
        e.$pessoa.$telefones = new Array<Telefone>();
        e.$grupoMonitoramentos = new Array<GrupoMonitoramento>();

        return e;
    }

    initializeFilter() {
        const f = new EmpregadoFilter();

        f.$pessoa = new PessoaFilter();
        f.$cargo = this.getCargoService().initializeFilter();
        f.$funcao = this.getFuncaoService().initializeFilter();
        f.$enfase = this.getEnfaseService().initializeFilter();
        f.$regime = this.getRegimeService().initializeFilter();
        f.$gerencia = this.getGerenciaService().initializeFilter();
        f.$base = this.getBaseService().initializeFilter();
        f.$ghe = this.getGheService().initializeFilter();
        f.$ghee = this.getGheeService().initializeFilter();

        return f;
    }

    toObject(obj: any): Empregado {
        let empregado: Empregado = new Empregado();
        empregado.$id = obj['id'];
        empregado.$chave = obj['chave'];
        empregado.$matricula = obj['matricula'];
        empregado.$ramal = obj['ramal'];
        empregado.$status = obj['status'];
        empregado.$estadoCivil = obj['estadoCivil'];
        empregado.$escolaridade = obj['escolaridade'];
        empregado.$pis = obj['pis'];
        empregado.$email = obj['email'];
        empregado.$vinculo = obj['vinculo'];
        empregado.$assinatura = obj['assinatura'];
        empregado.$foto = obj['foto'];
        empregado.$version = obj['version'];
        empregado = this.transformDate(obj, empregado, 'dataAdmissao');

        if (this.helper.isNotNull(obj['pessoa'])) {
            empregado.$pessoa = this.toPessoa(obj['pessoa']);
        }

        if (this.helper.isNotNull(obj['cargo'])) {
            empregado.$cargo = this.cargoService.toObject(obj['cargo']);
        }

        if (this.helper.isNotNull(obj['funcao'])) {
            empregado.$funcao = this.funcaoService.toObject(obj['funcao']);
        }

        if (this.helper.isNotNull(obj['enfase'])) {
            empregado.$enfase = this.enfaseService.toObject(obj['enfase']);
        }

        if (this.helper.isNotNull(obj['regime'])) {
            empregado.$regime = this.regimeService.toObject(obj['regime']);
        }

        if (this.helper.isNotNull(obj['gerencia'])) {
            empregado.$gerencia = this.gerenciaService.toObject(obj['gerencia']);
        }

        if (this.helper.isNotNull(obj['base'])) {
            empregado.$base = this.baseService.toObject(obj['base']);
        }

        if (this.helper.isNotNull(obj['ghe'])) {
            empregado.$ghe = this.gheService.toObject(obj['ghe']);
        }

        if (this.helper.isNotNull(obj['ghee'])) {
            empregado.$ghee = this.gheeService.toObject(obj['ghee']);
        }

        empregado.$grupoMonitoramentos = new Array<GrupoMonitoramento>();
        if (obj['grupoMonitoramentos']) {
            for (let x = 0; x < obj['grupoMonitoramentos'].length; x++) {
                const grupoMonitoramento: GrupoMonitoramento = this.grupoMonitoramentoService.toObject(obj['grupoMonitoramentos'][x]);
                empregado.$grupoMonitoramentos.push(grupoMonitoramento);
            }
        }

        return empregado;
    }

    toPessoa(obj: Pessoa): Pessoa {
        let pessoa: Pessoa = new Pessoa();
        pessoa.$id = obj['id'];
        pessoa.$nome = obj['nome'];
        pessoa.$rg = obj['rg'];
        pessoa.$cpf = obj['cpf'];

        pessoa.$sexo = obj['sexo'];
        pessoa.$idade = obj['idade'];
        pessoa.$version = obj['version'];
        pessoa = this.transformDate(obj, pessoa, 'dataNascimento');

        pessoa.$endereco = this.toEndereco(this.helper.isNotNull(obj['endereco']) ?
            obj['endereco'] : <any>{});

        pessoa.$telefones = new Array<Telefone>();
        if (obj['telefones']) {
            for (let x = 0; x < obj['telefones'].length; x++) {
                const telefone: Telefone = this.toTelefone(obj['telefones'][x]);

                pessoa.$telefones.push(telefone);
            }
        }

        return pessoa;
    }

    toEndereco(obj: Endereco): Endereco {
        const endereco: Endereco = new Endereco();
        endereco.$id = obj['id'];
        endereco.$logradouro = obj['logradouro'];
        endereco.$numero = obj['numero'];
        endereco.$complemento = obj['complemento'];
        endereco.$bairro = obj['bairro'];
        endereco.$cep = obj['cep'];
        endereco.$version = obj['version'];

        if (this.helper.isNotNull(obj['cidade'])) {
            endereco.$cidade = this.cidadeService.toObject(obj['cidade']);
        }

        return endereco;
    }

    toTelefone(obj: Telefone): Telefone {
        const telefone: Telefone = new Telefone();
        telefone.$id = obj['id'];
        telefone.$numero = obj['numero'];
        telefone.$version = obj['version'];

        return telefone;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }

    getCargoService(): CargoService {
        return this.cargoService;
    }

    getFuncaoService(): FuncaoService {
        return this.funcaoService;
    }

    getEnfaseService(): EnfaseService {
        return this.enfaseService;
    }

    getRegimeService(): RegimeService {
        return this.regimeService;
    }

    getGerenciaService(): GerenciaService {
        return this.gerenciaService;
    }

    getBaseService(): BaseService {
        return this.baseService;
    }

    getGheService(): GheService {
        return this.gheService;
    }

    getGheeService(): GheeService {
        return this.gheeService;
    }

    getGrupoMonitoramentoService(): GrupoMonitoramentoService {
        return this.grupoMonitoramentoService;
    }

    getCidadeService(): CidadeService {
        return this.cidadeService;
    }
}
