import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { RequisitoAso } from './../../../model/requisito-aso.model';
import { RequisitoAsoFilter } from './../../../filter/requisito-aso.filter';
import { RequisitoAsoService } from './../../../service/requisito-aso.service';

@Component({
  selector: 'app-requisito-aso-listar',
  templateUrl: './requisito-aso.listar.component.html',
  styleUrls: ['./requisito-aso.component.css']
})
export class RequisitoAsoListarComponent extends GenericListComponent<RequisitoAso, RequisitoAsoFilter> implements OnInit {

  constructor(private servico: RequisitoAsoService, private router: Router) {
    super(servico, router, 'Requisito do ASO',
      [
        ['Conteúdo', 'conteudo']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-requisito-aso-adicionar',
  templateUrl: './requisito-aso.component.html',
  styleUrls: ['./requisito-aso.component.css']
})
export class RequisitoAsoAdicionarComponent extends GenericComponent<RequisitoAso> implements OnInit {

  constructor(private servico: RequisitoAsoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Requisito do ASO - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-requisito-aso-editar',
  templateUrl: './requisito-aso.component.html',
  styleUrls: ['./requisito-aso.component.css']
})
export class RequisitoAsoEditarComponent extends GenericComponent<RequisitoAso> implements OnInit {

  constructor(private servico: RequisitoAsoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Requisito do ASO - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-requisito-aso-detalhar',
  templateUrl: './requisito-aso.component.html',
  styleUrls: ['./requisito-aso.component.css']
})
export class RequisitoAsoDetalharComponent extends GenericComponent<RequisitoAso> implements OnInit {

  constructor(private servico: RequisitoAsoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Requisito do ASO - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
