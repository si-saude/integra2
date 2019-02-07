import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { IndicadorSast } from './../../../model/indicador-sast.model';
import { IndicadorSastFilter } from './../../../filter/indicador-sast.filter';
import { IndicadorSastService } from './../../../service/indicador-sast.service';

@Component({
  selector: 'app-indicador-sast-listar',
  templateUrl: './indicador-sast.listar.component.html',
  styleUrls: ['./indicador-sast.component.css']
})
export class IndicadorSastListarComponent extends GenericListComponent<IndicadorSast, IndicadorSastFilter> implements OnInit {

  constructor(private servico: IndicadorSastService, private router: Router) {
    super(servico, router, 'Indicador da SAST',
      [
        ['Código', 'codigo'], ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-indicador-sast-adicionar',
  templateUrl: './indicador-sast.component.html',
  styleUrls: ['./indicador-sast.component.css']
})
export class IndicadorSastAdicionarComponent extends GenericComponent<IndicadorSast> implements OnInit {

  constructor(private servico: IndicadorSastService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Indicador da SAST - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-indicador-sast-editar',
  templateUrl: './indicador-sast.component.html',
  styleUrls: ['./indicador-sast.component.css']
})
export class IndicadorSastEditarComponent extends GenericComponent<IndicadorSast> implements OnInit {

  constructor(private servico: IndicadorSastService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Indicador da SAST - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-indicador-sast-detalhar',
  templateUrl: './indicador-sast.component.html',
  styleUrls: ['./indicador-sast.component.css']
})
export class IndicadorSastDetalharComponent extends GenericComponent<IndicadorSast> implements OnInit {

  constructor(private servico: IndicadorSastService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Indicador da SAST - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
