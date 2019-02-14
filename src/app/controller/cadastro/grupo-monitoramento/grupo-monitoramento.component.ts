import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { GrupoMonitoramento } from './../../../model/grupo-monitoramento.model';
import { GrupoMonitoramentoFilter } from './../../../filter/grupo-monitoramento.filter';
import { GrupoMonitoramentoService } from './../../../service/grupo-monitoramento.service';

@Component({
  selector: 'app-grupo-monitoramento-listar',
  templateUrl: './grupo-monitoramento.listar.component.html',
  styleUrls: ['./grupo-monitoramento.component.css']
})
export class GrupoMonitoramentoListarComponent extends GenericListComponent<GrupoMonitoramento, GrupoMonitoramentoFilter> implements OnInit {

  constructor(private servico: GrupoMonitoramentoService, private router: Router) {
    super(servico, router, 'Grupo de Monitoramento',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-grupo-monitoramento-adicionar',
  templateUrl: './grupo-monitoramento.component.html',
  styleUrls: ['./grupo-monitoramento.component.css']
})
export class GrupoMonitoramentoAdicionarComponent extends GenericComponent<GrupoMonitoramento> implements OnInit {

  constructor(private servico: GrupoMonitoramentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Grupo de Monitoramento - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-grupo-monitoramento-editar',
  templateUrl: './grupo-monitoramento.component.html',
  styleUrls: ['./grupo-monitoramento.component.css']
})
export class GrupoMonitoramentoEditarComponent extends GenericComponent<GrupoMonitoramento> implements OnInit {

  constructor(private servico: GrupoMonitoramentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Grupo de Monitoramento - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-grupo-monitoramento-detalhar',
  templateUrl: './grupo-monitoramento.component.html',
  styleUrls: ['./grupo-monitoramento.component.css']
})
export class GrupoMonitoramentoDetalharComponent extends GenericComponent<GrupoMonitoramento> implements OnInit {

  constructor(private servico: GrupoMonitoramentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Grupo de Monitoramento - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
