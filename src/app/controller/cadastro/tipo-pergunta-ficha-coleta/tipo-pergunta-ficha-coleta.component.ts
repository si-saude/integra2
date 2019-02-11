import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { TipoPerguntaFichaColeta } from './../../../model/tipo-pergunta-ficha-coleta.model';
import { TipoPerguntaFichaColetaFilter } from './../../../filter/tipo-pergunta-ficha-coleta.filter';
import { TipoPerguntaFichaColetaService } from './../../../service/tipo-pergunta-ficha-coleta.service';

@Component({
  selector: 'app-tipo-pergunta-ficha-coleta-listar',
  templateUrl: './tipo-pergunta-ficha-coleta.listar.component.html',
  styleUrls: ['./tipo-pergunta-ficha-coleta.component.css']
})
export class TipoPerguntaFichaColetaListarComponent extends GenericListComponent<TipoPerguntaFichaColeta, TipoPerguntaFichaColetaFilter> implements OnInit {

  constructor(private servico: TipoPerguntaFichaColetaService, private router: Router) {
    super(servico, router, 'Tipo de Pergunta da Ficha de Coleta',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-tipo-pergunta-ficha-coleta-adicionar',
  templateUrl: './tipo-pergunta-ficha-coleta.component.html',
  styleUrls: ['./tipo-pergunta-ficha-coleta.component.css']
})
export class TipoPerguntaFichaColetaAdicionarComponent extends GenericComponent<TipoPerguntaFichaColeta> implements OnInit {

  constructor(private servico: TipoPerguntaFichaColetaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Tipo de Pergunta da Ficha de Coleta - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-tipo-pergunta-ficha-coleta-editar',
  templateUrl: './tipo-pergunta-ficha-coleta.component.html',
  styleUrls: ['./tipo-pergunta-ficha-coleta.component.css']
})
export class TipoPerguntaFichaColetaEditarComponent extends GenericComponent<TipoPerguntaFichaColeta> implements OnInit {

  constructor(private servico: TipoPerguntaFichaColetaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Tipo de Pergunta da Ficha de Coleta - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-tipo-pergunta-ficha-coleta-detalhar',
  templateUrl: './tipo-pergunta-ficha-coleta.component.html',
  styleUrls: ['./tipo-pergunta-ficha-coleta.component.css']
})
export class TipoPerguntaFichaColetaDetalharComponent extends GenericComponent<TipoPerguntaFichaColeta> implements OnInit {

  constructor(private servico: TipoPerguntaFichaColetaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Tipo de Pergunta da Ficha de Coleta - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
