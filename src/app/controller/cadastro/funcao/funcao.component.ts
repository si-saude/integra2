import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Funcao } from './../../../model/funcao.model';
import { FuncaoFilter } from './../../../filter/funcao.filter';
import { FuncaoService } from './../../../service/funcao.service';

@Component({
  selector: 'app-funcao-listar',
  templateUrl: './funcao.listar.component.html',
  styleUrls: ['./funcao.component.css']
})
export class FuncaoListarComponent extends GenericListComponent<Funcao, FuncaoFilter> implements OnInit {

  constructor(private servico: FuncaoService, private router: Router) {
    super(servico, router, 'Função',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-funcao-adicionar',
  templateUrl: './funcao.component.html',
  styleUrls: ['./funcao.component.css']
})
export class FuncaoAdicionarComponent extends GenericComponent<Funcao> implements OnInit {

  constructor(private servico: FuncaoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Função - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-funcao-editar',
  templateUrl: './funcao.component.html',
  styleUrls: ['./funcao.component.css']
})
export class FuncaoEditarComponent extends GenericComponent<Funcao> implements OnInit {

  constructor(private servico: FuncaoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Função - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-funcao-detalhar',
  templateUrl: './funcao.component.html',
  styleUrls: ['./funcao.component.css']
})
export class FuncaoDetalharComponent extends GenericComponent<Funcao> implements OnInit {
  constructor(private servico: FuncaoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Função - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
