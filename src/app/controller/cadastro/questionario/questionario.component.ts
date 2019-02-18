import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Questionario } from './../../../model/questionario.model';
import { QuestionarioFilter } from './../../../filter/questionario.filter';
import { QuestionarioService } from './../../../service/questionario.service';

@Component({
  selector: 'app-questionario-listar',
  templateUrl: './questionario.listar.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioListarComponent extends GenericListComponent<Questionario, QuestionarioFilter> implements OnInit {

  private util: QuestionarioUtil;

  constructor(private servico: QuestionarioService, private router: Router) {
    super(servico, router, 'Questionário',
      [
        ['Nome', 'nome'], ['Tipo', 'tipo']
      ]);
  }

  ngOnInit() {
    this.util = new QuestionarioUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-questionario-adicionar',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioAdicionarComponent extends GenericComponent<Questionario> implements OnInit {

  private util: QuestionarioUtil;

  constructor(private servico: QuestionarioService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Questionário - Adicionar');
  }

  ngOnInit() {
    this.util = new QuestionarioUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-questionario-editar',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioEditarComponent extends GenericComponent<Questionario> implements OnInit {

  private util: QuestionarioUtil;

  constructor(private servico: QuestionarioService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Questionário - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
    this.util = new QuestionarioUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-questionario-detalhar',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioDetalharComponent extends GenericComponent<Questionario> implements OnInit {

  private util: QuestionarioUtil;

  constructor(private servico: QuestionarioService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Questionário - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new QuestionarioUtil(this.servico);
    this.init(function(obj){
    });
  }
}

export class QuestionarioUtil {
  tiposQuestionario: Array<string>;
  tiposQuestao: Array<string>;

  constructor(private servico: QuestionarioService) {

  }

  onInit() {
    this.servico.getUtilService().getTipoQuestionario('', (list) => {
      this.tiposQuestionario = list;
    }, undefined);

    this.servico.getUtilService().getTipoQuestao('', (list) => {
      this.tiposQuestao = list;
    }, undefined);
  }
}
