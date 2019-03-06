import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericWizardComponent } from './../../../../generic/generic-wizard-component';
import { WizardService } from './../../../../util/wizard-service/wizard-service.service';

import { AvaliacaoAtendimento } from './../../../../model/avaliacao-atendimento.model';
import { Questao } from './../../../../model/questao.model';
import { AvaliacaoAtendimentoService } from './../../../../service/avaliacao-atendimento.service';
import { Alternativa } from 'app/model/alternativa.model';
import { RespostaAvaliacaoAtendimento } from 'app/model/resposta-avaliacao-atendimento.model';
import { ItemRespostaAvaliacaoAtendimento } from 'app/model/item-resposta-avaliacao-atendimento.model';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent extends GenericWizardComponent<AvaliacaoAtendimento> implements OnInit {
  
  private questao: Questao;
  private codigo = '0001';

  constructor(private servico: AvaliacaoAtendimentoService, router: Router, route: ActivatedRoute,
      wizardService: WizardService<AvaliacaoAtendimento>) {
    super(servico, router, route, 'Avaliação do Atendimento', wizardService, '', '', undefined);
    this.first = 'avaliacao-atendimento';
  }

  ngOnInit() {
    this.servico.get(this.rt.params['_value']['id'], (res) => {
      this.t = this.servico.toObject(res.json());
      this.t.$respostas = new Array<RespostaAvaliacaoAtendimento>();
      this.servico.getQuestionarioService().get(this.t.$questionario.$id, (res) => {
        this.t.$questionario = this.servico.getQuestionarioService().toObject(res.json());
        this.getQuestao();
      }, undefined);
    }, undefined);
  }

  getQuestao() {
    this.questao = this.t.$questionario.$questoes.find(q => q.$codigo === this.codigo);
  }

  setCodigo(codigo: string) {
    if (codigo && codigo.trim() !== '') {
      this.codigo = codigo;
      this.getQuestao();      
    }
  }

  goNext() {
    this.addResposta();
    if (this._submit) {
      this.servico.registrar(this.t, (res) => {
        this.goFirst();
      }, undefined);
    } else {
      this.setCodigo(this.next);
      this.next = '';
    }
  }

  addResposta() {
    const resposta: RespostaAvaliacaoAtendimento = this.servico.toResposta(new RespostaAvaliacaoAtendimento());
    resposta.$avaliacao.$id = this.t.$id;
    resposta.$conteudo = this.questao.$conteudo;
    resposta.$questao = this.questao;
    
    resposta.$itens = new Array<ItemRespostaAvaliacaoAtendimento>();
    if (this.questao.$alternativas) {
      this.questao.$alternativas.filter(a => a.$marcado).forEach(a => {
        const item: ItemRespostaAvaliacaoAtendimento = new ItemRespostaAvaliacaoAtendimento();
        item.$conteudo = a.$titulo;
        item.$resposta = resposta;
        resposta.$itens.push(item);
      });
    }
    this.t.$respostas.push(resposta);
  }

  check(questao: Questao, alternativa: Alternativa) {
    if (questao.$tipo.includes('OBJETIVA')) {
      if (alternativa.$marcado) {
        questao.$alternativas.filter(a => a !== alternativa).forEach(a => a.$marcado = false);
        this.next = alternativa.$codigoProximo;
      }
      else {
        this.next = '';
      }
    } else {
      if (questao.$alternativas.find(a => a.$marcado === true)) {
        this.next = questao.$codigoProximo;
      } else {
        this.next = '';
      }
    }
    if (this.next === 'fim') {
      this.next = '';
      this._submit = 'registrar';
    } else {
      this._submit = undefined;
    }
  }

  change(questao: Questao) {
    if (questao.$tipo === 'SUBJETIVA') {
      if (questao.$conteudo && questao.$conteudo.trim() !== '') {
        this.next = questao.$codigoProximo;
      } else {
        this.next = '';
      }
    }
  }
}
