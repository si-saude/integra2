import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Cidade } from './../../../model/cidade.model';
import { CidadeFilter } from './../../../filter/cidade.filter';
import { CidadeService } from './../../../service/cidade.service';

@Component({
  selector: 'app-cidade-listar',
  templateUrl: './cidade.listar.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeListarComponent extends GenericListComponent<Cidade, CidadeFilter> implements OnInit {

  private util: CidadeUtil;

  constructor(private servico: CidadeService, private router: Router) {
    super(servico, router, 'Cidade',
      [
        ['Nome', 'nome'], ['UF', 'uf']
      ]);
  }

  ngOnInit() {
    this.util = new CidadeUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-cidade-adicionar',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeAdicionarComponent extends GenericComponent<Cidade> implements OnInit {

  private util: CidadeUtil;

  constructor(private servico: CidadeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Cidade - Adicionar');
  }

  ngOnInit() {
    this.util = new CidadeUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-cidade-editar',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeEditarComponent extends GenericComponent<Cidade> implements OnInit {

  private util: CidadeUtil;

  constructor(private servico: CidadeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Cidade - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
    this.util = new CidadeUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-cidade-detalhar',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeDetalharComponent extends GenericComponent<Cidade> implements OnInit {

  private util: CidadeUtil;

  constructor(private servico: CidadeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Cidade - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new CidadeUtil(this.servico);
    this.init(function(obj){
    });
  }
}

export class CidadeUtil {
  ufs: Array<string>;

  constructor(private servico: CidadeService) {

  }

  onInit() {
    const component = this;
    this.servico.getUtilService().getUf('', function(list) {
      component.ufs = list;
    }, undefined);
  }
}
