import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericWizardComponent } from './../../../../generic/generic-wizard-component';
import { WizardService } from './../../../../util/wizard-service/wizard-service.service';

import { Servico } from './../../../../model/servico.model';
import { ServicoFilter } from './../../../../filter/servico.filter';
import { Tarefa } from './../../../../model/tarefa.model';
import { TarefaService } from './../../../../service/tarefa.service';
import { SolicitacaoUtil } from './../../solicitacao/solicitacao.component';

@Component({
  selector: 'app-cancelar',
  templateUrl: './../solicitacao.component.html',
  styleUrls: ['./../solicitacao.component.css']
})
export class CancelarComponent extends GenericWizardComponent<Tarefa> implements OnInit {

  private util: SolicitacaoUtil;

  constructor(private servico: TarefaService, router: Router, route: ActivatedRoute,
      wizardService: WizardService<Tarefa>) {
    super(servico, router, route, 'Cancelar Solicitação', wizardService, undefined, '', undefined);
    this.util = new SolicitacaoUtil(servico);
    this.first = 'solicitacao/cancelar';
  }

  ngOnInit() {
    this.util.onInit();
    if (this.t && this.t.$servico) {
      this.changeServico(this.t.$servico);
    }
  }

  changeServico(servico: Servico) {
    this.next = servico ? 'solicitacao/cancelar-' + servico.$url : '';
  }
}

