import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Helper } from './../../../generic/helper';

import { Agenda } from './../../../dto/agenda.dto';
import { Tarefa } from './../../../model/tarefa.model';
import { TarefaFilter } from './../../../filter/tarefa.filter';
import { TarefaService } from './../../../service/tarefa.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  private helper: Helper;
  private filter: TarefaFilter;
  private agendas: Array<Agenda>;
  private datas: Array<string>;

  constructor(private servico: TarefaService, private router: Router) {
    this.router.routerState.snapshot.url = 'Agenda';
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
        this.servico.reportAgenda(this.filter, (res) => {
          const list = res.json();
          if (list && list.length > 0) {
            this.agendas = this.servico.toAgendas(list);
            this.datas = this.helper.distinct(this.agendas.map(a => a.$dataFront));
          } else {
            this.agendas = undefined;
            this.datas = undefined;
          }
        }, undefined );
      }
  }

  ngOnInit() {
  }

  getAgendasByData(d: string) {
    if (this.agendas) {
      return this.agendas.filter(a => a.$dataFront === d);
    }
    return {};
  }
}
