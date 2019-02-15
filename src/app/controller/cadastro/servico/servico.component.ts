import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Servico } from './../../../model/servico.model';
import { ServicoFilter } from './../../../filter/servico.filter';
import { ServicoService } from './../../../service/servico.service';

@Component({
  selector: 'app-servico-listar',
  templateUrl: './servico.listar.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoListarComponent extends GenericListComponent<Servico, ServicoFilter> implements OnInit {

  private util: ServicoUtil;

  constructor(private servico: ServicoService, private router: Router) {
    super(servico, router, 'Serviço',
      [
        ['Nome', 'nome'], ['Grupo', 'grupo']
      ]);
  }

  ngOnInit() {
    this.util = new ServicoUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-servico-adicionar',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoAdicionarComponent extends GenericComponent<Servico> implements OnInit {

  private util: ServicoUtil;

  constructor(private servico: ServicoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Serviço - Adicionar');
  }

  ngOnInit() {
    this.util = new ServicoUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-servico-editar',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoEditarComponent extends GenericComponent<Servico> implements OnInit {

  private util: ServicoUtil;

  constructor(private servico: ServicoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Serviço - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
    this.util = new ServicoUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-servico-detalhar',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoDetalharComponent extends GenericComponent<Servico> implements OnInit {

  private util: ServicoUtil;

  constructor(private servico: ServicoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Serviço - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new ServicoUtil(this.servico);
    this.init(function(obj){
    });
  }
}

export class ServicoUtil {
  grupos: Array<string>;

  constructor(private servico: ServicoService) {

  }

  onInit() {
    this.servico.getUtilService().getGrupoServico('', (list) => {
      this.grupos = list;
    }, undefined);
  }
}
