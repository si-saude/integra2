import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';

import { AvaliacaoAtendimento } from './../../../model/avaliacao-atendimento.model';
import { AvaliacaoAtendimentoFilter } from './../../../filter/avaliacao-atendimento.filter';
import { AvaliacaoAtendimentoService } from './../../../service/avaliacao-atendimento.service';

@Component({
  selector: 'app-avaliacao-atendimento',
  templateUrl: './avaliacao-atendimento.component.html',
  styleUrls: ['./avaliacao-atendimento.component.css']
})
export class AvaliacaoAtendimentoComponent extends GenericListComponent<AvaliacaoAtendimento, AvaliacaoAtendimentoFilter> implements OnInit {

  private util: AvaliacaoAtendimentoUtil;

  constructor(private servico: AvaliacaoAtendimentoService, private router: Router) {
    super(servico, router, 'Avaliação do Atendimento',
      [
        ['Empregado', 'checkin.empregado.pessoa.nome'],['Chegada', 'checkin.chegadaFront'], ['Status', 'status']
      ]);
  }

  ngOnInit() {
    this.util = new AvaliacaoAtendimentoUtil(this.servico);
    this.util.onInit();
    const hoje = this.servico.helper.getToday();
    const amanha = this.servico.helper.createDateFromString(hoje, false);
    amanha.setDate(amanha.getDate() + 1);
    this.filter.$checkin.$chegada.$inicioFront = hoje;
    this.filter.$checkin.$chegada.$fimFront = this.servico.helper.dateToString(amanha);
    this.filter.$checkin.$chegada.$typeFilter = 'ENTRE';
    this.page(1);
  }

  responder(avaliacao: AvaliacaoAtendimento) {
    this.router.navigate(['avaliacao-atendimento/questao/' + avaliacao.$id]);
  }
}

export class AvaliacaoAtendimentoUtil {

  statusAvaliacao: Array<string>;

  constructor(private servico: AvaliacaoAtendimentoService) {

  }

  onInit() {
    this.servico.getUtilService().getStatusAvaliacaoAtendimento('', (list) => {
      this.statusAvaliacao = list;
    }, undefined);
  }
}
