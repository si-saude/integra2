import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Empregado } from './../../../model/empregado.model';
import { EmpregadoFilter } from './../../../filter/empregado.filter';
import { EmpregadoService } from './../../../service/empregado.service';

@Component({
  selector: 'app-empregado-listar',
  templateUrl: './empregado.listar.component.html',
  styleUrls: ['./empregado.component.css']
})
export class EmpregadoListarComponent extends GenericListComponent<Empregado, EmpregadoFilter> implements OnInit {

  private util: EmpregadoUtil;

  constructor(private servico: EmpregadoService, private router: Router) {
    super(servico, router, 'Empregado',
      [
        ['Chave', 'chave'],['Nome', 'pessoa.nome']
      ]);
  }

  ngOnInit() {
    this.util = new EmpregadoUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-empregado-adicionar',
  templateUrl: './empregado.component.html',
  styleUrls: ['./empregado.component.css']
})
export class EmpregadoAdicionarComponent extends GenericComponent<Empregado> implements OnInit {

  private util: EmpregadoUtil;

  constructor(private servico: EmpregadoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Empregado - Adicionar');
  }

  ngOnInit() {
    this.util = new EmpregadoUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-empregado-editar',
  templateUrl: './empregado.component.html',
  styleUrls: ['./empregado.component.css']
})
export class EmpregadoEditarComponent extends GenericComponent<Empregado> implements OnInit {

  private util: EmpregadoUtil;

  constructor(private servico: EmpregadoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Empregado - Editar');
  }

  ngOnInit() {
    this.init(function (obj) {
    });
    this.util = new EmpregadoUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-empregado-detalhar',
  templateUrl: './empregado.component.html',
  styleUrls: ['./empregado.component.css']
})
export class EmpregadoDetalharComponent extends GenericComponent<Empregado> implements OnInit {

  private util: EmpregadoUtil;

  constructor(private servico: EmpregadoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Empregado - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new EmpregadoUtil(this.servico);
    this.init(function (obj) {
    });
  }
}

export class EmpregadoUtil {
  statusEmpregados: Array<string>;
  estadosCivis: Array<string>;
  escolaridades: Array<string>;
  vinculos: Array<string>;
  sexos: Array<string>;

  constructor(private servico: EmpregadoService) {

  }

  onInit() {
    const component = this;

    this.servico.getUtilService().getStatusEmpregado('', function (list) {
      component.statusEmpregados = list;
    }, undefined);
    this.servico.getUtilService().getEstadoCivil('', function (list) {
      component.estadosCivis = list;
    }, undefined);
    this.servico.getUtilService().getEscolaridade('', function (list) {
      component.escolaridades = list;
    }, undefined);
    this.servico.getUtilService().getVinculoEmpregado('', function (list) {
      component.vinculos = list;
    }, undefined);
    this.servico.getUtilService().getSexo('', function (list) {
      component.sexos = list;
    }, undefined);
  }
}
