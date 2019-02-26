import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericWizardComponent } from './../../../generic/generic-wizard-component';
import { WizardService } from './../../../util/wizard-service/wizard-service.service';

import { Localizacao } from './../../../model/localizacao.model';
import { LocalizacaoFilter } from './../../../filter/localizacao.filter';
import { Servico } from './../../../model/servico.model';
import { ServicoFilter } from './../../../filter/servico.filter';
import { Checkin } from './../../../model/checkin.model';
import { CheckinService } from './../../../service/checkin.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent extends GenericWizardComponent<Checkin> implements OnInit {

  private util: CheckinUtil;

  constructor(private servico: CheckinService, router: Router, route: ActivatedRoute,
      wizardService: WizardService<Checkin>) {
    super(servico, router, route, 'Check-in', wizardService, undefined, '', '');
    this.util = new CheckinUtil(servico);
    this.first = 'checkin';
  }

  ngOnInit() {
    this.util.loadLocalizacoes();
  }

  checkSubmit() {
    if (this.t.$localizacao && this.t.$localizacao.$id > 0 && this.t.$empregado && this.t.$empregado.$id > 0) {
      this.servico.getServicoService()
          .getListExisteTarefaAbertaPendenteByEmpregado(this.t.$empregado.$id, (res) => {
            this.util.servicos = this.servico.getServicoService().toList(res.json());
            if(!this.util.servicos || this.util.servicos.length == 0) {
              
            }
          }, undefined);
      //this._submit = 'submit';
    } else {
      this.util.servicos = undefined;
      this._submit = undefined;
    }
  }

  // this._submit = servico ? 'checkin/' + servico.$url : '';
}

export class CheckinUtil {

  servicos: Array<Servico>;
  servicoFilter: ServicoFilter;
  localizacoes: Array<Localizacao>;
  localizacaoFilter: LocalizacaoFilter;

  constructor(private servico: CheckinService) {
    this.servicoFilter = servico.getServicoService().initializeFilter();
    this.servicoFilter.$pageSize = 100000;
    this.localizacaoFilter = servico.getLocalizacaoService().initializeFilter();
    this.localizacaoFilter.$pageSize = 100000;
  }

  loadLocalizacoes() {
    this.servico.getLocalizacaoService().list(this.localizacaoFilter, (res) => {
      this.localizacoes = this.servico.getLocalizacaoService().toList(res.json().list);
    }, undefined);
  }

  loadServicos() {
    this.servico.getServicoService().list(this.servicoFilter, (res) => {
      this.servicos = this.servico.getServicoService().toList(res.json().list);
    }, undefined);
  }
}
