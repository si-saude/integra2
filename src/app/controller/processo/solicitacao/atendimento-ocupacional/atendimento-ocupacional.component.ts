import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../../generic/generic-list-component';
import { GenericWizardComponent } from './../../../../generic/generic-wizard-component';
import { WizardService } from './../../../../util/wizard-service/wizard-service.service';

import { Tarefa } from './../../../../model/tarefa.model';
import { TarefaService } from './../../../../service/tarefa.service';

@Component({
  selector: 'app-atendimento-ocupacional',
  templateUrl: './atendimento-ocupacional.component.html',
  styleUrls: ['./atendimento-ocupacional.component.css']
})
export class AtendimentoOcupacionalComponent extends GenericWizardComponent<Tarefa> implements OnInit {

  constructor(private servico: TarefaService, router: Router, route: ActivatedRoute,
      wizardService: WizardService<Tarefa>) {
    super(servico, router, route, 'Solicitação', wizardService, 'solicitacao', '', undefined);
  }

  ngOnInit() {
    if (!this.goPreviousIfNullModel()) {
      this.setTitle(this.title + ' - ' + this.t.$servico.$nome);
    }
  }

  checkSubmit() {
    if (this.t.$inicioFront && this.helper.validateDate(this.t.$inicioFront) && this.t.$cliente && this.t.$cliente.$id > 0) {
      this._submit = 'registrar';
    } else {
      this._submit = undefined;
    }
  }
}
