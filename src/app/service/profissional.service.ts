import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Curriculo } from '../model/curriculo.model';
import { CurriculoCurso } from '../model/curriculo-curso.model';
import { Empregado } from '../model/empregado.model';
import { Equipe } from '../model/equipe.model';
import { Profissional } from '../model/profissional.model';
import { Registro } from '../model/registro.model';
import { Servico } from '../model/servico.model';
import { EmpregadoFilter } from '../filter/empregado.filter';
import { PessoaFilter } from '../filter/pessoa.filter';
import { ProfissionalFilter } from '../filter/profissional.filter';
import { CursoService } from './curso.service';
import { EmpregadoService } from './empregado.service';
import { EquipeService } from './equipe.service';
import { ServicoService } from './servico.service';
import { UtilService } from './util.service';

@Injectable()
export class ProfissionalService extends GenericService<Profissional, ProfissionalFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService,
        private cursoService: CursoService, private empregadoService: EmpregadoService,
        private equipeService: EquipeService, private servicoService: ServicoService) {
        super(http, 'profissional', router, dialogService, spinnerService);
    }

    initializeObject() {
        const profissional = new Profissional();
        profissional.$empregado = new Empregado();
        profissional.$curriculo = new Curriculo();
        profissional.$curriculo.$curriculoCursos = new Array<CurriculoCurso>();
        profissional.$registro = new Registro();
        profissional.$equipes = new Array<Equipe>();
        profissional.$servicos = new Array<Servico>();

        return profissional;
    }

    initializeFilter() {
        const f = new ProfissionalFilter();
        f.$empregado = new EmpregadoFilter();
        f.$empregado.$pessoa = new PessoaFilter();

        return f;
    }

    toObject(obj: any): Profissional {
        let profissional: Profissional = new Profissional();

        profissional.$id = obj['id'];
        profissional.$mi = obj['mi'];
        profissional.$version = obj['version'];

        profissional = this.transformDate(obj, profissional, 'dataAso');

        if (this.helper.isNotNull(obj['empregado'])) {
            profissional.$empregado = this.empregadoService.toObject(obj['empregado']);
        }

        profissional.$curriculo = this.toCurriculo(this.helper.isNotNull(obj['curriculo']) ?
        obj['curriculo'] : <any>{});

        profissional.$registro = this.toRegistro(this.helper.isNotNull(obj['registro']) ?
        obj['registro'] : <any>{});

        profissional.$equipes = new Array<Equipe>();
        if (obj['equipes']) {
            for (let x = 0; x < obj['equipes'].length; x++) {
                const equipe: Equipe = this.equipeService.toObject(obj['equipes'][x]);

                profissional.$equipes.push(equipe);
            }
        }

        profissional.$servicos = new Array<Servico>();
        if (obj['servicos']) {
            for (let x = 0; x < obj['servicos'].length; x++) {
                const servico: Servico = this.servicoService.toObject(obj['servicos'][x]);

                profissional.$servicos.push(servico);
            }
        }

        return profissional;
    }

    toCurriculo(obj: Curriculo): Curriculo {
        const curriculo: Curriculo = new Curriculo();
        curriculo.$id = obj['id'];
        curriculo.$historico = obj['historico'];
        curriculo.$formacao = obj['formacao'];
        curriculo.$atuacao = obj['atuacao'];
        curriculo.$version = obj['version'];

        curriculo.$curriculoCursos = new Array<CurriculoCurso>();
        if (obj['curriculoCursos']) {
            for (let x = 0; x < obj['curriculoCursos'].length; x++) {
                const curriculoCurso: CurriculoCurso = this.toCurriculoCurso(obj['curriculoCursos'][x]);
                curriculoCurso.$curriculo.$id = curriculo.$id;

                curriculo.$curriculoCursos.push(curriculoCurso);
            }
        }

        return curriculo;
    }

    toRegistro(obj: Registro): Registro {
        let registro: Registro = new Registro();
        registro.$id = obj['id'];
        registro.$conselho = obj['conselho'];
        registro.$numero = obj['numero'];
        registro.$uf = obj['uf'];

        registro = this.transformDate(obj, registro, 'vencimento');
        registro.$version = obj['version'];

        return registro;
    }

    toCurriculoCurso(obj: CurriculoCurso): CurriculoCurso {
        let curriculoCurso: CurriculoCurso = new CurriculoCurso();
        curriculoCurso.$id = obj['id'];
        curriculoCurso.$version = obj['version'];

        curriculoCurso = this.transformDate(obj, curriculoCurso, 'data');

        curriculoCurso.$curriculo = new Curriculo();

        if (this.helper.isNotNull(obj['curso'])) {
            curriculoCurso.$curso = this.cursoService.toObject(obj['curso']);
        }

        return curriculoCurso;
    }

    getEmpregadoService(): EmpregadoService {
        return this.empregadoService;
    }

    getEquipeService(): EquipeService {
        return this.equipeService;
    }

    getServicoService(): ServicoService {
        return this.servicoService;
    }

    getCursoService(): CursoService {
        return this.cursoService;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}
