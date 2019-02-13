import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Regime } from './../../../model/regime.model';
import { RegimeFilter } from './../../../filter/regime.filter';
import { RegimeService } from './../../../service/regime.service';

@Component({
  selector: 'app-regime-listar',
  templateUrl: './regime.listar.component.html',
  styleUrls: ['./regime.component.css']
})
export class RegimeListarComponent extends GenericListComponent<Regime, RegimeFilter> implements OnInit {

  constructor(private servico: RegimeService, private router: Router) {
    super(servico, router, 'Regime',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-regime-adicionar',
  templateUrl: './regime.component.html',
  styleUrls: ['./regime.component.css']
})
export class RegimeAdicionarComponent extends GenericComponent<Regime> implements OnInit {

  constructor(private servico: RegimeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Regime - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-regime-editar',
  templateUrl: './regime.component.html',
  styleUrls: ['./regime.component.css']
})
export class RegimeEditarComponent extends GenericComponent<Regime> implements OnInit {

  constructor(private servico: RegimeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Regime - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-regime-detalhar',
  templateUrl: './regime.component.html',
  styleUrls: ['./regime.component.css']
})
export class RegimeDetalharComponent extends GenericComponent<Regime> implements OnInit {
  constructor(private servico: RegimeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Regime - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
