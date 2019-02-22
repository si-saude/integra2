import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../../generic/generic-list-component';
import { GenericWizardComponent } from './../../../../generic/generic-wizard-component';
import { WizardService } from './../../../../util/wizard-service/wizard-service.service';

import { Servico } from './../../../../model/servico.model';
import { ServicoFilter } from './../../../../filter/servico.filter';
import { Tarefa } from './../../../../model/tarefa.model';
import { TarefaFilter } from './../../../../filter/tarefa.filter';
import { TarefaService } from './../../../../service/tarefa.service';

@Component({
  selector: 'app-atendimento-ocupacional',
  templateUrl: './atendimento-ocupacional.component.html',
  styleUrls: ['./atendimento-ocupacional.component.css']
})
export class AtendimentoOcupacionalComponent extends GenericWizardComponent<Tarefa> implements OnInit {

  constructor(private servico: TarefaService, router: Router, route: ActivatedRoute,
      wizardService: WizardService<Tarefa>) {
    super(servico, router, route, 'Solicitação', wizardService, undefined, '', undefined);
  }

  ngOnInit() {
    this.title += ' =' + this.t.$servico.$nome;
  }
}
