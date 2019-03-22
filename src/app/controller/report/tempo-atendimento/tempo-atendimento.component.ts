import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Helper } from './../../../generic/helper';

import { TempoAtendimento } from './../../../dto/tempo-atendimento.dto';
import { Tarefa } from './../../../model/tarefa.model';
import { TarefaFilter } from './../../../filter/tarefa.filter';
import { TarefaService } from './../../../service/tarefa.service';

@Component({
  selector: 'app-tempo-atendimento',
  templateUrl: './tempo-atendimento.component.html',
  styleUrls: ['./tempo-atendimento.component.css']
})
export class TempoAtendimentoComponent implements OnInit {

  private helper: Helper;
  private filter: TarefaFilter;
  private tempoAtendimentos: Array<TempoAtendimento>;
  private empregados: Array<string>;

  constructor(private servico: TarefaService, private router: Router) {
    this.router.routerState.snapshot.url = 'Tempo de Atendimento';
    this.helper = new Helper();
    this.filter = this.servico.initializeFilter();
    this.filter.$pageSize = 1000000;
    this.filter.$inicio.$typeFilter = 'ENTRE';
  }

  filtrar() {
    if (!this.filter.$inicio.$inicioFront || this.filter.$inicio.$inicioFront.trim() === '' ||
      !this.filter.$inicio.$fimFront || this.filter.$inicio.$fimFront.trim() === '') {
        this.servico.showMessage('É necessário informar o período para a busca.');
      } else {
        this.servico.reportTempoAtendimento(this.filter, (res) => {
          const list = res.json();
          if (list && list.length > 0) {
            this.tempoAtendimentos = this.servico.toTempoAtendimentos(list);
            this.empregados = this.helper.distinct(this.tempoAtendimentos.map(a => a.$empregado));
          } else {
            this.tempoAtendimentos = undefined;
            this.empregados = undefined;
          }
        }, undefined );
      }
  }

  ngOnInit() {
  }

  getTempoAtendimentosByEmpregado(d: string) {
    if (this.tempoAtendimentos) {
      return this.tempoAtendimentos.filter(a => a.$empregado === d);
    }
    return {};
  }
}
