import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { RiscoGhe } from './../../../model/risco-ghe.model';
import { RiscoGheFilter } from './../../../filter/risco-ghe.filter';
import { RiscoGheService } from './../../../service/risco-ghe.service';

@Component({
  selector: 'app-risco-ghe-listar',
  templateUrl: './risco-ghe.listar.component.html',
  styleUrls: ['./risco-ghe.component.css']
})
export class RiscoGheListarComponent extends GenericListComponent<RiscoGhe, RiscoGheFilter> implements OnInit {

  constructor(private servico: RiscoGheService, private router: Router) {
    super(servico, router, 'Risco de GHE',
      [
        ['Título', 'titulo']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-risco-ghe-adicionar',
  templateUrl: './risco-ghe.component.html',
  styleUrls: ['./risco-ghe.component.css']
})
export class RiscoGheAdicionarComponent extends GenericComponent<RiscoGhe> implements OnInit {

  constructor(private servico: RiscoGheService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Risco de GHE - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-risco-ghe-editar',
  templateUrl: './risco-ghe.component.html',
  styleUrls: ['./risco-ghe.component.css']
})
export class RiscoGheEditarComponent extends GenericComponent<RiscoGhe> implements OnInit {

  constructor(private servico: RiscoGheService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Risco de GHE - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-risco-ghe-detalhar',
  templateUrl: './risco-ghe.component.html',
  styleUrls: ['./risco-ghe.component.css']
})
export class RiscoGheDetalharComponent extends GenericComponent<RiscoGhe> implements OnInit {

  constructor(private servico: RiscoGheService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Risco de GHE - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
