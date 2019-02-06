import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Exame } from './../../../model/exame.model';
import { Clinica } from './../../../model/clinica.model';
import { ClinicaFilter } from './../../../filter/clinica.filter';
import { ClinicaService } from './../../../service/clinica.service';

@Component({
  selector: 'app-clinica-listar',
  templateUrl: './clinica.listar.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaListarComponent extends GenericListComponent<Clinica, ClinicaFilter> implements OnInit {

  private util: ClinicaUtil;

  constructor(private servico: ClinicaService, private router: Router) {
    super(servico, router, 'Clínica',
      [
        ['Nome', 'nome'], ['UF', 'uf']
      ]);
  }

  ngOnInit() {
    this.util = new ClinicaUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-clinica-adicionar',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaAdicionarComponent extends GenericComponent<Clinica> implements OnInit {

  private util: ClinicaUtil;
  
  constructor(private servico: ClinicaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Clínica - Adicionar');
  }

  ngOnInit() {
    this.util = new ClinicaUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-clinica-editar',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaEditarComponent extends GenericComponent<Clinica> implements OnInit {

  private util: ClinicaUtil;

  constructor(private servico: ClinicaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Clínica - Editar');
  }

  ngOnInit() {
    this.init(function(t){
    });
    this.util = new ClinicaUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-clinica-detalhar',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaDetalharComponent extends GenericComponent<Clinica> implements OnInit {

  private util: ClinicaUtil;

  constructor(private servico: ClinicaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Clínica - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new ClinicaUtil(this.servico);
    this.init(function(obj){
    });
  }
}

export class ClinicaUtil {
  ufs: Array<string>;

  constructor(private servico: ClinicaService) {

  }

  onInit() {
    const component = this;
    this.servico.getUtilService().getUf('', function(list) {
      component.ufs = list;
    }, undefined);
  }
}
