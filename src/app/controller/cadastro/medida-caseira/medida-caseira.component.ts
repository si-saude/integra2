import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { MedidaCaseira } from './../../../model/medida-caseira.model';
import { MedidaCaseiraFilter } from './../../../filter/medida-caseira.filter';
import { MedidaCaseiraService } from './../../../service/medida-caseira.service';

@Component({
  selector: 'app-medida-caseira-listar',
  templateUrl: './medida-caseira.listar.component.html',
  styleUrls: ['./medida-caseira.component.css']
})
export class MedidaCaseiraListarComponent extends GenericListComponent<MedidaCaseira, MedidaCaseiraFilter> implements OnInit {

  constructor(private servico: MedidaCaseiraService, private router: Router) {
    super(servico, router, 'Medida Caseira',
      [
        ['Descrição', 'descricao']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-medida-caseira-adicionar',
  templateUrl: './medida-caseira.component.html',
  styleUrls: ['./medida-caseira.component.css']
})
export class MedidaCaseiraAdicionarComponent extends GenericComponent<MedidaCaseira> implements OnInit {

  constructor(private servico: MedidaCaseiraService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Medida Caseira - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-medida-caseira-editar',
  templateUrl: './medida-caseira.component.html',
  styleUrls: ['./medida-caseira.component.css']
})
export class MedidaCaseiraEditarComponent extends GenericComponent<MedidaCaseira> implements OnInit {

  constructor(private servico: MedidaCaseiraService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Medida Caseira - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-medida-caseira-detalhar',
  templateUrl: './medida-caseira.component.html',
  styleUrls: ['./medida-caseira.component.css']
})
export class MedidaCaseiraDetalharComponent extends GenericComponent<MedidaCaseira> implements OnInit {
  constructor(private servico: MedidaCaseiraService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Medida Caseira - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
