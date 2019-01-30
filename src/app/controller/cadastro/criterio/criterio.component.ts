import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Criterio } from './../../../model/criterio.model';
import { CriterioFilter } from './../../../filter/criterio.filter';
import { CriterioService } from './../../../service/criterio.service';

@Component({
  selector: 'app-criterio-listar',
  templateUrl: './criterio.listar.component.html',
  styleUrls: ['./criterio.component.css']
})
export class CriterioListarComponent extends GenericListComponent<Criterio, CriterioFilter> implements OnInit {

  private util: CriterioUtil;
  
  constructor(private servico: CriterioService, private router: Router) {
    super(servico, router, 'Critério',
      [
        ['Nome', 'nome'], ['Tipo', 'tipo']
      ]);
  }

  ngOnInit() {
    this.util = new CriterioUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-criterio-adicionar',
  templateUrl: './criterio.component.html',
  styleUrls: ['./criterio.component.css']
})
export class CriterioAdicionarComponent extends GenericComponent<Criterio> implements OnInit {

  private util: CriterioUtil;
  
  constructor(private servico: CriterioService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Critério - Adicionar');
  }

  ngOnInit() {
    this.util = new CriterioUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-criterio-editar',
  templateUrl: './criterio.component.html',
  styleUrls: ['./criterio.component.css']
})
export class CriterioEditarComponent extends GenericComponent<Criterio> implements OnInit {

  private util: CriterioUtil;
  
  constructor(private servico: CriterioService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Critério - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
    this.util = new CriterioUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-criterio-detalhar',
  templateUrl: './criterio.component.html',
  styleUrls: ['./criterio.component.css']
})
export class CriterioDetalharComponent extends GenericComponent<Criterio> implements OnInit {

  private util: CriterioUtil;
  
  constructor(private servico: CriterioService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Critério - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
    this.util = new CriterioUtil(this.servico);
  }
}

export class CriterioUtil {
  tipos: Array<string>;
  sexos: Array<string>;
  operadores: Array<string>;

  constructor(private servico: CriterioService) {

  }

  onInit() {
    const component = this;
    this.servico.getUtilService().getTipoCriterio('', function(list) {
      component.tipos = list;
    }, undefined);
    this.servico.getUtilService().getSexo('', function(list) {
      component.sexos = list;
    }, undefined);
    this.servico.getUtilService().getOperador('', function(list) {
      component.operadores = list;
    }, undefined);
  }
}