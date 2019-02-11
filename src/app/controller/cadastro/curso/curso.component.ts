import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Curso } from './../../../model/curso.model';
import { CursoFilter } from './../../../filter/curso.filter';
import { CursoService } from './../../../service/curso.service';

@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso.listar.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoListarComponent extends GenericListComponent<Curso, CursoFilter> implements OnInit {

  constructor(private servico: CursoService, private router: Router) {
    super(servico, router, 'Curso',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-curso-adicionar',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoAdicionarComponent extends GenericComponent<Curso> implements OnInit {

  constructor(private servico: CursoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Curso - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoEditarComponent extends GenericComponent<Curso> implements OnInit {

  constructor(private servico: CursoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Curso - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }

  teste() {
    console.log(this.t.$validade);
  }
}

@Component({
  selector: 'app-curso-detalhar',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoDetalharComponent extends GenericComponent<Curso> implements OnInit {

  constructor(private servico: CursoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Curso - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
