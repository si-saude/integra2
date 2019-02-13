import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Enfase } from './../../../model/enfase.model';
import { EnfaseFilter } from './../../../filter/enfase.filter';
import { EnfaseService } from './../../../service/enfase.service';

@Component({
  selector: 'app-enfase-listar',
  templateUrl: './enfase.listar.component.html',
  styleUrls: ['./enfase.component.css']
})
export class EnfaseListarComponent extends GenericListComponent<Enfase, EnfaseFilter> implements OnInit {

  constructor(private servico: EnfaseService, private router: Router) {
    super(servico, router, 'Ênfase',
      [
        ['Descrição', 'descricao']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-enfase-adicionar',
  templateUrl: './enfase.component.html',
  styleUrls: ['./enfase.component.css']
})
export class EnfaseAdicionarComponent extends GenericComponent<Enfase> implements OnInit {

  constructor(private servico: EnfaseService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Ênfase - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-enfase-editar',
  templateUrl: './enfase.component.html',
  styleUrls: ['./enfase.component.css']
})
export class EnfaseEditarComponent extends GenericComponent<Enfase> implements OnInit {

  constructor(private servico: EnfaseService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Ênfase - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-enfase-detalhar',
  templateUrl: './enfase.component.html',
  styleUrls: ['./enfase.component.css']
})
export class EnfaseDetalharComponent extends GenericComponent<Enfase> implements OnInit {
  constructor(private servico: EnfaseService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Ênfase - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
