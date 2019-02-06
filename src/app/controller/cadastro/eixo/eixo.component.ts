import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Eixo } from './../../../model/eixo.model';
import { Equipe } from './../../../model/equipe.model';
import { EixoFilter } from './../../../filter/eixo.filter';
import { EquipeFilter } from './../../../filter/equipe.filter';
import { EixoService } from './../../../service/eixo.service';

@Component({
  selector: 'app-eixo-listar',
  templateUrl: './eixo.listar.component.html',
  styleUrls: ['./eixo.component.css']
})
export class EixoListarComponent extends GenericListComponent<Eixo, EixoFilter> implements OnInit {

  private util: EixoUtil;

  constructor(private servico: EixoService, private router: Router) {
    super(servico, router, 'Eixo Clínico',
      [
        ['Título', 'titulo']
      ]);
  }

  ngOnInit() {
    this.util = new EixoUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }

  getFilter(pageNumber) {
    return super.getFilter(pageNumber);
  }
}

@Component({
  selector: 'app-eixo-adicionar',
  templateUrl: './eixo.component.html',
  styleUrls: ['./eixo.component.css']
})
export class EixoAdicionarComponent extends GenericComponent<Eixo> implements OnInit {

  private util: EixoUtil;

  constructor(private servico: EixoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Eixo Clínico - Adicionar');
  }

  ngOnInit() {
    this.util = new EixoUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-eixo-editar',
  templateUrl: './eixo.component.html',
  styleUrls: ['./eixo.component.css']
})
export class EixoEditarComponent extends GenericComponent<Eixo> implements OnInit {

  private util: EixoUtil;

  constructor(private servico: EixoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Eixo Clínico - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
    this.util = new EixoUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-eixo-detalhar',
  templateUrl: './eixo.component.html',
  styleUrls: ['./eixo.component.css']
})
export class EixoDetalharComponent extends GenericComponent<Eixo> implements OnInit {

  private util: EixoUtil;

  constructor(private servico: EixoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Eixo Clínico - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new EixoUtil(this.servico);
    this.init(function(obj){
    });
  }
}

export class EixoUtil {

  equipes: Array<Equipe>;
  equipeFilter: EquipeFilter;

  constructor(private servico: EixoService) {
    this.equipeFilter = new EquipeFilter();
    this.equipeFilter.$pageSize = 100000;
  }

  onInit() {
    const component = this;
    this.servico.getEquipeService().list(this.equipeFilter, function(res) {
      component.equipes = component.servico.getEquipeService().toList(res.json().list);
    }, undefined);
  }
}
