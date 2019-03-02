import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild( 'autocompleteEmpregado' ) autocompleteEmpregado;
  
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
    if (this.helper.isNotNull(this.t.$localizacao) && this.t.$empregado && this.t.$empregado.$id > 0) {
      this.servico.getServicoService()
          .getListExisteTarefaAbertaPendenteByEmpregado(this.t.$empregado.$id, (res) => {
            this.util.servicos = this.servico.getServicoService().toList(res.json());
            if (this.util.servicos.length === 1) {
              this.t.$servico = this.servico.getServicoService().toObject(this.util.servicos[0]);
              this._submit = 'registrar';
            }
            if (!this.util.servicos || this.util.servicos.length == 0) {
              this.servico.showMessage('Não há solicitação para ' + this.t.$empregado.$pessoa.$nome);
            }
          }, undefined);
    } else {
      this.limpar();
    }
  }

  changeServico() {
    if (this.helper.isNotNull(this.t.$servico)) {
      this._submit = 'registrar';
    } else {
      this._submit = undefined;
    }
  }

  clean() {
    this.limpar();
    this.t.$empregado = this.servico.getEmpregadoService().initializeObject();
    this.autocompleteEmpregado.validate();
  }

  limpar() {
    this.util.servicos = undefined;
    this._submit = undefined;
    this.t.$servico = undefined;
  }
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
