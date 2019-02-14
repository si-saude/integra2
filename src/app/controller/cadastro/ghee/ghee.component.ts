import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Ghee } from './../../../model/ghee.model';
import { GheeFilter } from './../../../filter/ghee.filter';
import { GheeService } from './../../../service/ghee.service';

@Component({
  selector: 'app-ghee-listar',
  templateUrl: './ghee.listar.component.html',
  styleUrls: ['./ghee.component.css']
})
export class GheeListarComponent extends GenericListComponent<Ghee, GheeFilter> implements OnInit {

  constructor(private servico: GheeService, private router: Router) {
    super(servico, router, 'GHEE',
      [
        ['Código', 'codigo'], ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-ghee-adicionar',
  templateUrl: './ghee.component.html',
  styleUrls: ['./ghee.component.css']
})
export class GheeAdicionarComponent extends GenericComponent<Ghee> implements OnInit {

  constructor(private servico: GheeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'GHEE - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-ghee-editar',
  templateUrl: './ghee.component.html',
  styleUrls: ['./ghee.component.css']
})
export class GheeEditarComponent extends GenericComponent<Ghee> implements OnInit {

  constructor(private servico: GheeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'GHEE - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-ghee-detalhar',
  templateUrl: './ghee.component.html',
  styleUrls: ['./ghee.component.css']
})
export class GheeDetalharComponent extends GenericComponent<Ghee> implements OnInit {
  constructor(private servico: GheeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'GHEE - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
