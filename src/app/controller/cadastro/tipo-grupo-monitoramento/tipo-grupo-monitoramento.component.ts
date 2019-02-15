import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { TipoGrupoMonitoramento } from './../../../model/tipo-grupo-monitoramento.model';
import { TipoGrupoMonitoramentoFilter } from './../../../filter/tipo-grupo-monitoramento.filter';
import { TipoGrupoMonitoramentoService } from './../../../service/tipo-grupo-monitoramento.service';

@Component({
  selector: 'app-tipo-grupo-monitoramento-listar',
  templateUrl: './tipo-grupo-monitoramento.listar.component.html',
  styleUrls: ['./tipo-grupo-monitoramento.component.css']
})
export class TipoGrupoMonitoramentoListarComponent extends GenericListComponent<TipoGrupoMonitoramento, TipoGrupoMonitoramentoFilter> implements OnInit {

  constructor(private servico: TipoGrupoMonitoramentoService, private router: Router) {
    super(servico, router, 'Tipo de Grupo de Monitoramento',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-tipo-grupo-monitoramento-adicionar',
  templateUrl: './tipo-grupo-monitoramento.component.html',
  styleUrls: ['./tipo-grupo-monitoramento.component.css']
})
export class TipoGrupoMonitoramentoAdicionarComponent extends GenericComponent<TipoGrupoMonitoramento> implements OnInit {

  constructor(private servico: TipoGrupoMonitoramentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Tipo de Grupo de Monitoramento - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-tipo-grupo-monitoramento-editar',
  templateUrl: './tipo-grupo-monitoramento.component.html',
  styleUrls: ['./tipo-grupo-monitoramento.component.css']
})
export class TipoGrupoMonitoramentoEditarComponent extends GenericComponent<TipoGrupoMonitoramento> implements OnInit {

  constructor(private servico: TipoGrupoMonitoramentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Tipo de Grupo de Monitoramento - Editar');
  }

  ngOnInit() {
    this.init(function (obj) {
    });
  }
}

@Component({
  selector: 'app-tipo-grupo-monitoramento-detalhar',
  templateUrl: './tipo-grupo-monitoramento.component.html',
  styleUrls: ['./tipo-grupo-monitoramento.component.css']
})
export class TipoGrupoMonitoramentoDetalharComponent extends GenericComponent<TipoGrupoMonitoramento> implements OnInit {
  constructor(private servico: TipoGrupoMonitoramentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Tipo de Grupo de Monitoramento - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function (obj) {
    });
  }
}
