import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Ghe } from './../../../model/ghe.model';
import { RiscoGhe } from './../../../model/risco-ghe.model';
import { GheFilter } from './../../../filter/ghe.filter';
import { RiscoGheFilter } from './../../../filter/risco-ghe.filter';
import { GheService } from './../../../service/ghe.service';

@Component({
  selector: 'app-ghe-listar',
  templateUrl: './ghe.listar.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheListarComponent extends GenericListComponent<Ghe, GheFilter> implements OnInit {

  private util: GheUtil;

  constructor(private servico: GheService, private router: Router) {
    super(servico, router, 'GHE',
      [
        ['Código', 'codigo'], ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.util = new GheUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-ghe-adicionar',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheAdicionarComponent extends GenericComponent<Ghe> implements OnInit {

  private util: GheUtil;

  constructor(private servico: GheService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'GHE - Adicionar');
  }

  ngOnInit() {
    this.util = new GheUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-ghe-editar',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheEditarComponent extends GenericComponent<Ghe> implements OnInit {

  private util: GheUtil;

  constructor(private servico: GheService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'GHE - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
    this.util = new GheUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-ghe-detalhar',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheDetalharComponent extends GenericComponent<Ghe> implements OnInit {

  private util: GheUtil;

  constructor(private servico: GheService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'GHE - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new GheUtil(this.servico);
    this.init(function(obj){
    });
  }
}

export class GheUtil {

  riscos: Array<RiscoGhe>;
  riscoFilter: RiscoGheFilter;

  constructor(private servico: GheService) {
    this.riscoFilter = new RiscoGheFilter();
    this.riscoFilter.$pageSize = 100000;
  }

  onInit() {
    const component = this;
    this.servico.getRiscoGheService().list(this.riscoFilter, function(res) {
      component.riscos = component.servico.getRiscoGheService().toList(res.json().list);
    }, undefined);
  }
}
