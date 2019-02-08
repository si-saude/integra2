import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Diagnostico } from './../../../model/diagnostico.model';
import { Eixo } from './../../../model/eixo.model';
import { DiagnosticoFilter } from './../../../filter/diagnostico.filter';
import { EixoFilter } from './../../../filter/eixo.filter';
import { DiagnosticoService } from './../../../service/diagnostico.service';

@Component({
  selector: 'app-diagnostico-listar',
  templateUrl: './diagnostico.listar.component.html',
  styleUrls: ['./diagnostico.component.css']
})
export class DiagnosticoListarComponent extends GenericListComponent<Diagnostico, DiagnosticoFilter> implements OnInit {

  constructor(private servico: DiagnosticoService, private router: Router) {
    super(servico, router, 'Diagnóstico',
      [
        ['Código', 'codigo'], ['Descrição', 'descricao']
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
  selector: 'app-diagnostico-adicionar',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css']
})
export class DiagnosticoAdicionarComponent extends GenericComponent<Diagnostico> implements OnInit {

  constructor(private servico: DiagnosticoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Diagnóstico - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-diagnostico-editar',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css']
})
export class DiagnosticoEditarComponent extends GenericComponent<Diagnostico> implements OnInit {

  constructor(private servico: DiagnosticoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Diagnóstico - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-diagnostico-detalhar',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css']
})
export class DiagnosticoDetalharComponent extends GenericComponent<Diagnostico> implements OnInit {

  constructor(private servico: DiagnosticoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Diagnóstico - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
