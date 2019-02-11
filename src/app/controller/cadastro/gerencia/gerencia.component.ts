import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Gerencia } from './../../../model/gerencia.model';
import { GerenciaFilter } from './../../../filter/gerencia.filter';
import { GerenciaService } from './../../../service/gerencia.service';

@Component({
  selector: 'app-gerencia-listar',
  templateUrl: './gerencia.listar.component.html',
  styleUrls: ['./gerencia.component.css']
})
export class GerenciaListarComponent extends GenericListComponent<Gerencia, GerenciaFilter> implements OnInit {

  constructor(private servico: GerenciaService, private router: Router) {
    super(servico, router, 'Gerência',
      [
        ['Código', 'codigoCompleto']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-gerencia-adicionar',
  templateUrl: './gerencia.component.html',
  styleUrls: ['./gerencia.component.css']
})
export class GerenciaAdicionarComponent extends GenericComponent<Gerencia> implements OnInit {

  constructor(private servico: GerenciaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Gerência - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-gerencia-editar',
  templateUrl: './gerencia.component.html',
  styleUrls: ['./gerencia.component.css']
})
export class GerenciaEditarComponent extends GenericComponent<Gerencia> implements OnInit {

  constructor(private servico: GerenciaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Gerência - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-gerencia-detalhar',
  templateUrl: './gerencia.component.html',
  styleUrls: ['./gerencia.component.css']
})
export class GerenciaDetalharComponent extends GenericComponent<Gerencia> implements OnInit {

  constructor(private servico: GerenciaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Gerência - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
