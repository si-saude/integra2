import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Dependencia } from './../../../model/dependencia.model';
import { RegraAtendimento } from './../../../model/regra-atendimento.model';
import { RegraAtendimentoEquipe } from './../../../model/regra-atendimento-equipe.model';
import { RegraAtendimentoFilter } from './../../../filter/regra-atendimento.filter';
import { RegraAtendimentoService } from './../../../service/regra-atendimento.service';

@Component({
  selector: 'app-regra-atendimento-listar',
  templateUrl: './regra-atendimento.listar.component.html',
  styleUrls: ['./regra-atendimento.component.css']
})
export class RegraAtendimentoListarComponent extends GenericListComponent<RegraAtendimento, RegraAtendimentoFilter> implements OnInit {

  constructor(private servico: RegraAtendimentoService, private router: Router) {
    super(servico, router, 'Regra de Atendimento',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-regra-atendimento-adicionar',
  templateUrl: './regra-atendimento.component.html',
  styleUrls: ['./regra-atendimento.component.css']
})
export class RegraAtendimentoAdicionarComponent extends GenericComponent<RegraAtendimento> implements OnInit {

  private util: RegraAtendimentoUtil;

  constructor(private servico: RegraAtendimentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Regra de Atendimento - Adicionar');
  }

  ngOnInit() {
    this.util = new RegraAtendimentoUtil(this.servico);
  }
}

@Component({
  selector: 'app-regra-atendimento-editar',
  templateUrl: './regra-atendimento.component.html',
  styleUrls: ['./regra-atendimento.component.css']
})
export class RegraAtendimentoEditarComponent extends GenericComponent<RegraAtendimento> implements OnInit {

  private util: RegraAtendimentoUtil;

  constructor(private servico: RegraAtendimentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Regra de Atendimento - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
    this.util = new RegraAtendimentoUtil(this.servico);
  }
}

@Component({
  selector: 'app-regra-atendimento-detalhar',
  templateUrl: './regra-atendimento.component.html',
  styleUrls: ['./regra-atendimento.component.css']
})
export class RegraAtendimentoDetalharComponent extends GenericComponent<RegraAtendimento> implements OnInit {

  private util: RegraAtendimentoUtil;

  constructor(private servico: RegraAtendimentoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Regra de Atendimento - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(t){
    });
    this.util = new RegraAtendimentoUtil(this.servico);
  }
}

export class RegraAtendimentoUtil {

  constructor(private servico: RegraAtendimentoService) {

  }

  addRegraAtendimentoEquipe(grid, equipe) {
    const regraAtendimentoEquipe: RegraAtendimentoEquipe =
      this.servico.toRegraAtendimentoEquipe(new RegraAtendimentoEquipe());
    regraAtendimentoEquipe.$equipe = equipe;
    grid.add(regraAtendimentoEquipe);
  }

  addDependencia(grid, equipe) {
    const dependencia: Dependencia = this.servico.toDependencia(new Dependencia());
    dependencia.$equipe = equipe;
    grid.add(dependencia);
  }
}
