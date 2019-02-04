import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Base } from './../../../model/base.model';
import { BaseFilter } from './../../../filter/base.filter';
import { Imovel } from './../../../model/imovel.model';
import { ImovelFilter } from './../../../filter/imovel.filter';
import { ImovelService } from './../../../service/imovel.service';

@Component({
  selector: 'app-imovel-listar',
  templateUrl: './imovel.listar.component.html',
  styleUrls: ['./imovel.component.css']
})
export class ImovelListarComponent extends GenericListComponent<Imovel, ImovelFilter> implements OnInit {

  private util: ImovelUtil;

  constructor(private servico: ImovelService, private router: Router) {
    super(servico, router, 'Imóvel',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.util = new ImovelUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-imovel-adicionar',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css']
})
export class ImovelAdicionarComponent extends GenericComponent<Imovel> implements OnInit {

  private util: ImovelUtil;

  constructor(private servico: ImovelService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Imóvel - Adicionar');
  }

  ngOnInit() {
    this.util = new ImovelUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-imovel-editar',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css']
})
export class ImovelEditarComponent extends GenericComponent<Imovel> implements OnInit {

  private util: ImovelUtil;

  constructor(private servico: ImovelService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Imóvel - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
    this.util = new ImovelUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-imovel-detalhar',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css']
})
export class ImovelDetalharComponent extends GenericComponent<Imovel> implements OnInit {

  private util: ImovelUtil;

  constructor(private servico: ImovelService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Imóvel - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new ImovelUtil(this.servico);
    this.init(function(obj){
    });
  }
}

export class ImovelUtil {
  bases: Array<Base>;
  filter: BaseFilter;

  constructor(private servico: ImovelService) {
    this.filter = new BaseFilter();
    this.filter.$pageSize = 100000;
  }

  onInit() {
    const component = this;
    this.servico.getBaseService().list(this.filter, function(res) {
      component.bases = component.servico.getBaseService().toList(res.json().list);
    }, undefined);
  }
}
