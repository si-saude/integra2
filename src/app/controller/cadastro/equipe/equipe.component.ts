import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Equipe } from './../../../model/equipe.model';
import { EquipeFilter } from './../../../filter/equipe.filter';
import { EquipeService } from './../../../service/equipe.service';

@Component({
  selector: 'app-equipe-listar',
  templateUrl: './equipe.listar.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeListarComponent extends GenericListComponent<Equipe, EquipeFilter> implements OnInit {

  constructor(private servico: EquipeService, private router: Router) {
    super(servico, router, 'Equipe',
      [
        ['Nome', 'nome'], ['Abreviação', 'abreviacao']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-equipe-adicionar',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeAdicionarComponent extends GenericComponent<Equipe> implements OnInit {

  constructor(private servico: EquipeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Equipe - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-equipe-editar',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeEditarComponent extends GenericComponent<Equipe> implements OnInit {

  constructor(private servico: EquipeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Equipe - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-equipe-detalhar',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeDetalharComponent extends GenericComponent<Equipe> implements OnInit {

  constructor(private servico: EquipeService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Equipe - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
