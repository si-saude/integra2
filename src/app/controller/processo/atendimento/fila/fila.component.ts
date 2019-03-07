import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfirmService } from './../../../../util/confirm/confirm.service';
import { GenericListComponent } from './../../../../generic/generic-list-component';
import { Modal } from './../../../../generic/modal';

import { Atendimento } from './../../../../model/atendimento.model';
import { AtendimentoFilter } from './../../../../filter/atendimento.filter';
import { AtendimentoService } from './../../../../service/atendimento.service';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {

  private modalLocalizacao: Modal;
  
  constructor(private servico: AtendimentoService, private router: Router) {
    this.modalLocalizacao = new Modal(this, 'entrar');
    this.modalLocalizacao.open();
  }

  ngOnInit() {
 
  }

  entrar(){
    console.log('entrou');
  }

}