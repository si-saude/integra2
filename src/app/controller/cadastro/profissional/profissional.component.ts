import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { CurriculoCurso } from './../../../model/curriculo-curso.model';
import { Profissional } from './../../../model/profissional.model';
import { ProfissionalFilter } from './../../../filter/profissional.filter';
import { ProfissionalService } from './../../../service/profissional.service';

@Component({
  selector: 'app-profissional-listar',
  templateUrl: './profissional.listar.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalListarComponent extends GenericListComponent<Profissional, ProfissionalFilter> implements OnInit {

  private util: ProfissionalUtil;

  constructor(private servico: ProfissionalService, private router: Router) {
    super(servico, router, 'Profissional',
      [
        ['Chave', 'empregado.chave'], ['Nome', 'empregado.pessoa.nome']
      ]);
  }

  ngOnInit() {
    this.util = new ProfissionalUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-profissional-adicionar',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalAdicionarComponent extends GenericComponent<Profissional> implements OnInit {

  private util: ProfissionalUtil;

  constructor(private servico: ProfissionalService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Profissional - Adicionar');
  }

  ngOnInit() {
    this.util = new ProfissionalUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-profissional-editar',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalEditarComponent extends GenericComponent<Profissional> implements OnInit {

  private util: ProfissionalUtil;

  constructor(private servico: ProfissionalService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Profissional - Editar');
  }

  ngOnInit() {
    this.init(function (t) {
    });
    this.util = new ProfissionalUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-profissional-detalhar',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalDetalharComponent extends GenericComponent<Profissional> implements OnInit {

  private util: ProfissionalUtil;

  constructor(private servico: ProfissionalService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Profissional - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new ProfissionalUtil(this.servico);
    this.init(function (obj) {
    });
  }
}

export class ProfissionalUtil {

  ufs: Array<string>;

  constructor(private servico: ProfissionalService) {

  }

  onInit() {
    const component = this;

    this.servico.getUtilService().getUf('', function (list) {
      component.ufs = list;
    }, undefined);
  }

  addCurriculoCurso(grid, curso) {
    const curriculoCurso: CurriculoCurso =
      this.servico.toCurriculoCurso(new CurriculoCurso());
    curriculoCurso.$curso = curso;
    grid.add(curriculoCurso);
  }
}