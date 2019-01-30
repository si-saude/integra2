import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Curso } from './../../../model/curso.model';
import { Cargo } from './../../../model/cargo.model';
import { CargoFilter } from './../../../filter/cargo.filter';
import { CargoService } from './../../../service/cargo.service';

@Component({
  selector: 'app-cargo-listar',
  templateUrl: './cargo.listar.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoListarComponent extends GenericListComponent<Cargo, CargoFilter> implements OnInit {

  constructor(private servico: CargoService, private router: Router) {
    super(servico, router, 'Cargo',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-cargo-adicionar',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoAdicionarComponent extends GenericComponent<Cargo> implements OnInit {

  constructor(private servico: CargoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Cargo - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-cargo-editar',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoEditarComponent extends GenericComponent<Cargo> implements OnInit {

  constructor(private servico: CargoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Cargo - Editar');
  }

  ngOnInit() {
    this.init(function(t){
    });
  }
}

@Component({
  selector: 'app-cargo-detalhar',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoDetalharComponent extends GenericComponent<Cargo> implements OnInit {

  constructor(private servico: CargoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Cargo - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
