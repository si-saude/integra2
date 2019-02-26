import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Profissiograma } from './../../../model/profissiograma.model';
import { ProfissiogramaExame } from './../../../model/profissiograma-exame.model';
import { ProfissiogramaGrupo } from './../../../model/profissiograma-grupo.model';
import { ProfissiogramaFilter } from './../../../filter/profissiograma.filter';
import { ProfissiogramaService } from './../../../service/profissiograma.service';

@Component({
  selector: 'app-profissiograma-listar',
  templateUrl: './profissiograma.listar.component.html',
  styleUrls: ['./profissiograma.component.css']
})
export class ProfissiogramaListarComponent extends GenericListComponent<Profissiograma, ProfissiogramaFilter> implements OnInit {

  private util: ProfissiogramaUtil;

  constructor(private servico: ProfissiogramaService, private router: Router) {
    super(servico, router, 'Profissiograma',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.util = new ProfissiogramaUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-profissiograma-adicionar',
  templateUrl: './profissiograma.component.html',
  styleUrls: ['./profissiograma.component.css']
})
export class ProfissiogramaAdicionarComponent extends GenericComponent<Profissiograma> implements OnInit {

  private util: ProfissiogramaUtil;

  constructor(private servico: ProfissiogramaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Profissiograma - Adicionar');
  }

  ngOnInit() {
    this.util = new ProfissiogramaUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-profissiograma-editar',
  templateUrl: './profissiograma.component.html',
  styleUrls: ['./profissiograma.component.css']
})
export class ProfissiogramaEditarComponent extends GenericComponent<Profissiograma> implements OnInit {

  private util: ProfissiogramaUtil;

  constructor(private servico: ProfissiogramaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Profissiograma - Editar');
  }

  ngOnInit() {
    this.init(function (obj) {
    });
    this.util = new ProfissiogramaUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-profissiograma-detalhar',
  templateUrl: './profissiograma.component.html',
  styleUrls: ['./profissiograma.component.css']
})
export class ProfissiogramaDetalharComponent extends GenericComponent<Profissiograma> implements OnInit {

  private util: ProfissiogramaUtil;

  constructor(private servico: ProfissiogramaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Profissiograma - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new ProfissiogramaUtil(this.servico);
    this.init(function (obj) {
    });
  }
}

export class ProfissiogramaUtil {
  vinculos: Array<string>;

  constructor(private servico: ProfissiogramaService) {

  }

  onInit() {
    const component = this;
    this.servico.getUtilService().getVinculoEmpregado('', function (list) {
      component.vinculos = list;
    }, undefined);
  }

  addProfissiogramaGrupo(grid, grupoMonitoramento) {
    const profissiogramaGrupo: ProfissiogramaGrupo =
      this.servico.toProfissiogramaGrupo(new ProfissiogramaGrupo());
    profissiogramaGrupo.$grupoMonitoramento = grupoMonitoramento;

    grid.add(profissiogramaGrupo);
  }

  addProfissiogramaExame(grid, exame) {
    const profissiogramaExame: ProfissiogramaExame =
      this.servico.toProfissiogramaExame(new ProfissiogramaExame());
    profissiogramaExame.$exame = exame;

    grid.add(profissiogramaExame);
  }
}
