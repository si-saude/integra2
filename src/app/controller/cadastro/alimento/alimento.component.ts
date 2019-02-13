import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Alimento } from './../../../model/alimento.model';
import { AlimentoFilter } from './../../../filter/alimento.filter';
import { AlimentoService } from './../../../service/alimento.service';

@Component({
  selector: 'app-alimento-listar',
  templateUrl: './alimento.listar.component.html',
  styleUrls: ['./alimento.component.css']
})
export class AlimentoListarComponent extends GenericListComponent<Alimento, AlimentoFilter> implements OnInit {

  private util: AlimentoUtil;

  constructor(private servico: AlimentoService, private router: Router) {
    super(servico, router, 'Alimento',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.util = new AlimentoUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-alimento-adicionar',
  templateUrl: './alimento.component.html',
  styleUrls: ['./alimento.component.css']
})
export class AlimentoAdicionarComponent extends GenericComponent<Alimento> implements OnInit {

  private util: AlimentoUtil;

  constructor(private servico: AlimentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Alimento - Adicionar');
  }

  ngOnInit() {
    this.util = new AlimentoUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-alimento-editar',
  templateUrl: './alimento.component.html',
  styleUrls: ['./alimento.component.css']
})
export class AlimentoEditarComponent extends GenericComponent<Alimento> implements OnInit {

  private util: AlimentoUtil;

  constructor(private servico: AlimentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Alimento - Editar');
  }

  ngOnInit() {
    this.init(function (t) {
    });
    this.util = new AlimentoUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-alimento-detalhar',
  templateUrl: './alimento.component.html',
  styleUrls: ['./alimento.component.css']
})
export class AlimentoDetalharComponent extends GenericComponent<Alimento> implements OnInit {

  private util: AlimentoUtil;

  constructor(private servico: AlimentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Alimento - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new AlimentoUtil(this.servico);
    this.init(function(obj){
    });
  }
}

export class AlimentoUtil {
  tiposAlimento: Array<string>;

  constructor(private servico: AlimentoService) {

  }

  onInit() {
    const component = this;
    this.servico.getUtilService().getTipoAlimento('', function (list) {
      component.tiposAlimento = list;
    }, undefined);
  }
}
