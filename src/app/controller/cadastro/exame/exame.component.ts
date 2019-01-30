import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Exame } from './../../../model/exame.model';
import { ExameFilter } from './../../../filter/exame.filter';
import { ExameService } from './../../../service/exame.service';

@Component({
  selector: 'app-exame-listar',
  templateUrl: './exame.listar.component.html',
  styleUrls: ['./exame.component.css']
})
export class ExameListarComponent extends GenericListComponent<Exame, ExameFilter> implements OnInit {

  constructor(private servico: ExameService, private router: Router) {
    super(servico, router, 'Exame',
      [
        ['Código', 'codigo'], ['Descrição', 'descricao']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-exame-adicionar',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.css']
})
export class ExameAdicionarComponent extends GenericComponent<Exame> implements OnInit {

  constructor(private servico: ExameService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Exame - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-exame-editar',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.css']
})
export class ExameEditarComponent extends GenericComponent<Exame> implements OnInit {

  constructor(private servico: ExameService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Exame - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-exame-detalhar',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.css']
})
export class ExameDetalharComponent extends GenericComponent<Exame> implements OnInit {

  constructor(private servico: ExameService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Exame - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
