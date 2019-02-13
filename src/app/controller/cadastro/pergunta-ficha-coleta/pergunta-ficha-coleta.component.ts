import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { PerguntaFichaColeta } from './../../../model/pergunta-ficha-coleta.model';
import { PerguntaFichaColetaFilter } from './../../../filter/pergunta-ficha-coleta.filter';
import { PerguntaFichaColetaService } from './../../../service/pergunta-ficha-coleta.service';

@Component({
  selector: 'app-pergunta-ficha-coleta-listar',
  templateUrl: './pergunta-ficha-coleta.listar.component.html',
  styleUrls: ['./pergunta-ficha-coleta.component.css']
})
export class PerguntaFichaColetaListarComponent
  extends GenericListComponent<PerguntaFichaColeta, PerguntaFichaColetaFilter> implements OnInit {

  private util: PerguntaFichaColetaUtil;

  constructor(private servico: PerguntaFichaColetaService, private router: Router) {
    super(servico, router, 'Pergunta da Ficha de Coleta',
      [
        ['Código', 'codigo'], ['Inativa', 'inativo', 'checkbox'], ['Descrição', 'descricao']
      ]);
  }

  ngOnInit() {
    this.util = new PerguntaFichaColetaUtil(this.servico);
    this.util.onInit();
    this.page(1);
  }
}

@Component({
  selector: 'app-pergunta-ficha-coleta-adicionar',
  templateUrl: './pergunta-ficha-coleta.component.html',
  styleUrls: ['./pergunta-ficha-coleta.component.css']
})
export class PerguntaFichaColetaAdicionarComponent extends GenericComponent<PerguntaFichaColeta> implements OnInit {

  private util: PerguntaFichaColetaUtil;

  constructor(private servico: PerguntaFichaColetaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Pergunta da Ficha de Coleta - Adicionar');
  }

  ngOnInit() {
    this.util = new PerguntaFichaColetaUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-pergunta-ficha-coleta-editar',
  templateUrl: './pergunta-ficha-coleta.component.html',
  styleUrls: ['./pergunta-ficha-coleta.component.css']
})
export class PerguntaFichaColetaEditarComponent extends GenericComponent<PerguntaFichaColeta> implements OnInit {

  private util: PerguntaFichaColetaUtil;

  constructor(private servico: PerguntaFichaColetaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Pergunta da Ficha de Coleta - Editar');
  }

  ngOnInit() {
    this.init(function(t){
    });
    this.util = new PerguntaFichaColetaUtil(this.servico);
    this.util.onInit();
  }
}

@Component({
  selector: 'app-pergunta-ficha-coleta-detalhar',
  templateUrl: './pergunta-ficha-coleta.component.html',
  styleUrls: ['./pergunta-ficha-coleta.component.css']
})
export class PerguntaFichaColetaDetalharComponent extends GenericComponent<PerguntaFichaColeta> implements OnInit {

  private util: PerguntaFichaColetaUtil;

  constructor(private servico: PerguntaFichaColetaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Pergunta da Ficha de Coleta - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.util = new PerguntaFichaColetaUtil(this.servico);
    this.init(function(obj){
    });
  }
}

export class PerguntaFichaColetaUtil {
  tipos: Array<string>;

  constructor(private servico: PerguntaFichaColetaService) {

  }

  onInit() {
    this.servico.getUtilService().getTipoPerguntaFichaColeta('', (list) => {
      this.tipos = list;
    }, undefined);
  }
}
