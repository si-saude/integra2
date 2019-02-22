import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericWizardComponent } from './../../../generic/generic-wizard-component';
import { WizardService } from './../../../util/wizard-service/wizard-service.service';

import { Servico } from './../../../model/servico.model';
import { ServicoFilter } from './../../../filter/servico.filter';
import { Tarefa } from './../../../model/tarefa.model';
import { TarefaFilter } from './../../../filter/tarefa.filter';
import { TarefaService } from './../../../service/tarefa.service';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent extends GenericWizardComponent<Tarefa> implements OnInit {

  private util: SolicitacaoUtil;

  constructor(private servico: TarefaService, router: Router, route: ActivatedRoute,
      wizardService: WizardService<Tarefa>) {
    super(servico, router, route, 'Solicitação', wizardService, undefined, '', undefined);
    this.util = new SolicitacaoUtil(servico);
  }

  ngOnInit() {
    this.util.onInit();
  }

  changeServico(servico: Servico) {
    this.next = servico ? 'solicitacao/' + servico.$url : '';
  }
}

export class SolicitacaoUtil {

  servicos: Array<Servico>;
  servicoFilter: ServicoFilter;

  constructor(private servico: TarefaService) {
    this.servicoFilter = servico.getServicoService().initializeFilter();
    this.servicoFilter.$pageSize = 100000;
  }

  onInit() {
    this.servico.getServicoService().list(this.servicoFilter, (res) => {
      this.servicos = this.servico.getServicoService().toList(res.json().list);
    }, undefined);
  }
}
