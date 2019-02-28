import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericFilter } from './../../../generic/generic-filter';
import { GenericComponent } from './../../../generic/generic-component';

import { Parametro } from './../../../model/parametro.model';
import { RegraAtendimento } from './../../../model/regra-atendimento.model';
import { RegraAtendimentoFilter } from './../../../filter/regra-atendimento.filter';
import { ParametroService } from './../../../service/parametro.service';

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.css']
})
export class ParametroComponent extends GenericComponent<Parametro> implements OnInit {

  private util: ParametroUtil;

  constructor(private servico: ParametroService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Parâmetro');
  }

  ngOnInit() {
    this.util = new ParametroUtil(this.servico);
    this.util.onInit();
    this.servico.list(new GenericFilter(), (res) => {
      const list = res.json().list;
      if (list && list[0]) {
        this.t = this.servico.toObject(list[0]);
      }
    }, undefined);
  }
}


export class ParametroUtil {

  regras: Array<RegraAtendimento>;
  regraFilter: RegraAtendimentoFilter;

  constructor(private servico: ParametroService) {
    this.regraFilter = servico.getRegraAtendimentoService().initializeFilter();
    this.regraFilter.$pageSize = 100000;
  }

  onInit() {
    this.servico.getRegraAtendimentoService().list(this.regraFilter, (res) => {
      this.regras = this.servico.getRegraAtendimentoService().toList(res.json().list);
    }, undefined);
  }
}
