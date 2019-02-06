import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Eixo } from './../../../model/eixo.model';
import { Equipe } from './../../../model/equipe.model';
import { EixoFilter } from './../../../filter/eixo.filter';
import { EquipeFilter } from './../../../filter/equipe.filter';
import { EixoService } from './../../../service/eixo.service';

@Component({
  selector: 'app-eixo-listar',
  templateUrl: './eixo.listar.component.html',
  styleUrls: ['./eixo.component.css']
})
export class EixoListarComponent extends GenericListComponent<Eixo, EixoFilter> implements OnInit {

  constructor(private servico: EixoService, private router: Router) {
    super(servico, router, 'Eixo Clínico',
      [
        ['Título', 'titulo']
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
  selector: 'app-eixo-adicionar',
  templateUrl: './eixo.component.html',
  styleUrls: ['./eixo.component.css']
})
export class EixoAdicionarComponent extends GenericComponent<Eixo> implements OnInit {

  constructor(private servico: EixoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Eixo Clínico - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-eixo-editar',
  templateUrl: './eixo.component.html',
  styleUrls: ['./eixo.component.css']
})
export class EixoEditarComponent extends GenericComponent<Eixo> implements OnInit {

  constructor(private servico: EixoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Eixo Clínico - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-eixo-detalhar',
  templateUrl: './eixo.component.html',
  styleUrls: ['./eixo.component.css']
})
export class EixoDetalharComponent extends GenericComponent<Eixo> implements OnInit {

  constructor(private servico: EixoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Eixo Clínico - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
