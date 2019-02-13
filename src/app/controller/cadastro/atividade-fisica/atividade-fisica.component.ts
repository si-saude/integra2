import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { AtividadeFisica } from './../../../model/atividade-fisica.model';
import { AtividadeFisicaFilter } from './../../../filter/atividade-fisica.filter';
import { AtividadeFisicaService } from './../../../service/atividade-fisica.service';

@Component({
  selector: 'app-atividade-fisica-listar',
  templateUrl: './atividade-fisica.listar.component.html',
  styleUrls: ['./atividade-fisica.component.css']
})
export class AtividadeFisicaListarComponent extends GenericListComponent<AtividadeFisica, AtividadeFisicaFilter> implements OnInit {

  constructor(private servico: AtividadeFisicaService, private router: Router) {
    super(servico, router, 'Atividade Física',
      [
        ['Descrição', 'descricao']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-atividade-fisica-adicionar',
  templateUrl: './atividade-fisica.component.html',
  styleUrls: ['./atividade-fisica.component.css']
})
export class AtividadeFisicaAdicionarComponent extends GenericComponent<AtividadeFisica> implements OnInit {

  constructor(private servico: AtividadeFisicaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Atividade Física - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-atividade-fisica-editar',
  templateUrl: './atividade-fisica.component.html',
  styleUrls: ['./atividade-fisica.component.css']
})
export class AtividadeFisicaEditarComponent extends GenericComponent<AtividadeFisica> implements OnInit {

  constructor(private servico: AtividadeFisicaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Atividade Física - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-atividade-fisica-detalhar',
  templateUrl: './atividade-fisica.component.html',
  styleUrls: ['./atividade-fisica.component.css']
})
export class AtividadeFisicaDetalharComponent extends GenericComponent<AtividadeFisica> implements OnInit {
  constructor(private servico: AtividadeFisicaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Atividade Física - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
