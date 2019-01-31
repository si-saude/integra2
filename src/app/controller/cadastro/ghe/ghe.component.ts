import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Base } from './../../../model/base.model';
import { BaseFilter } from './../../../filter/base.filter';
import { BaseService } from './../../../service/base.service';

@Component({
  selector: 'app-base-listar',
  templateUrl: './base.listar.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseListarComponent extends GenericListComponent<Base, BaseFilter> implements OnInit {

  private util: BaseUtil;

  constructor(private servico: BaseService, private router: Router) {
    super(servico, router, 'Base',
      [
        ['Nome', 'nome'], ['UF', 'uf']
      ]);
  }

  ngOnInit() {
    this.util = new BaseUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-base-adicionar',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseAdicionarComponent extends GenericComponent<Base> implements OnInit {

  private util: BaseUtil;

  constructor(private servico: BaseService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Base - Adicionar');
  }

  ngOnInit() {
    this.util = new BaseUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-base-editar',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseEditarComponent extends GenericComponent<Base> implements OnInit {

  private util: BaseUtil;

  constructor(private servico: BaseService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Base - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
    this.util = new BaseUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-base-detalhar',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseDetalharComponent extends GenericComponent<Base> implements OnInit {

  private util: BaseUtil;

  constructor(private servico: BaseService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Base - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new BaseUtil(this.servico);
    this.init(function(obj){
    });
  }
}

export class BaseUtil {
  ufs: Array<string>;

  constructor(private servico: BaseService) {

  }

  onInit() {
    const component = this;
    this.servico.getUtilService().getUf('', function(list) {
      component.ufs = list;
    }, undefined);
  }
}
