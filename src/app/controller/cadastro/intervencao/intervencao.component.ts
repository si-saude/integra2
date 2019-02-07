import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Intervencao } from './../../../model/intervencao.model';
import { IntervencaoFilter } from './../../../filter/intervencao.filter';
import { IntervencaoService } from './../../../service/intervencao.service';

@Component({
  selector: 'app-intervencao-listar',
  templateUrl: './intervencao.listar.component.html',
  styleUrls: ['./intervencao.component.css']
})
export class IntervencaoListarComponent extends GenericListComponent<Intervencao, IntervencaoFilter> implements OnInit {

  constructor(private servico: IntervencaoService, private router: Router) {
    super(servico, router, 'Intervenção',
      [
        ['Descrição', 'descricao'],['Equipe', 'equipe.nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }

  getFilter(pageNumber) {
    return super.getFilter(pageNumber);
  }
}

@Component({
  selector: 'app-intervencao-adicionar',
  templateUrl: './intervencao.component.html',
  styleUrls: ['./intervencao.component.css']
})
export class IntervencaoAdicionarComponent extends GenericComponent<Intervencao> implements OnInit {

  constructor(private servico: IntervencaoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Intervenção - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-intervencao-editar',
  templateUrl: './intervencao.component.html',
  styleUrls: ['./intervencao.component.css']
})
export class IntervencaoEditarComponent extends GenericComponent<Intervencao> implements OnInit {

  constructor(private servico: IntervencaoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Intervenção - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-intervencao-detalhar',
  templateUrl: './intervencao.component.html',
  styleUrls: ['./intervencao.component.css']
})
export class IntervencaoDetalharComponent extends GenericComponent<Intervencao> implements OnInit {

  constructor(private servico: IntervencaoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Intervenção - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
