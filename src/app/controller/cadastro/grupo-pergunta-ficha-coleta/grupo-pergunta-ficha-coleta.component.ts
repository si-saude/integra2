import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { GrupoPerguntaFichaColeta } from './../../../model/grupo-pergunta-ficha-coleta.model';
import { GrupoPerguntaFichaColetaFilter } from './../../../filter/grupo-pergunta-ficha-coleta.filter';
import { GrupoPerguntaFichaColetaService } from './../../../service/grupo-pergunta-ficha-coleta.service';

@Component({
  selector: 'app-grupo-pergunta-ficha-coleta-listar',
  templateUrl: './grupo-pergunta-ficha-coleta.listar.component.html',
  styleUrls: ['./grupo-pergunta-ficha-coleta.component.css']
})
export class GrupoPerguntaFichaColetaListarComponent
  extends GenericListComponent<GrupoPerguntaFichaColeta, GrupoPerguntaFichaColetaFilter> implements OnInit {

  constructor(private servico: GrupoPerguntaFichaColetaService, private router: Router) {
    super(servico, router, 'Grupo de Pergunta da Ficha de Coleta',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-grupo-pergunta-ficha-coleta-adicionar',
  templateUrl: './grupo-pergunta-ficha-coleta.component.html',
  styleUrls: ['./grupo-pergunta-ficha-coleta.component.css']
})
export class GrupoPerguntaFichaColetaAdicionarComponent extends GenericComponent<GrupoPerguntaFichaColeta> implements OnInit {

  constructor(private servico: GrupoPerguntaFichaColetaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Grupo de Pergunta da Ficha de Coleta - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-grupo-pergunta-ficha-coleta-editar',
  templateUrl: './grupo-pergunta-ficha-coleta.component.html',
  styleUrls: ['./grupo-pergunta-ficha-coleta.component.css']
})
export class GrupoPerguntaFichaColetaEditarComponent extends GenericComponent<GrupoPerguntaFichaColeta> implements OnInit {

  constructor(private servico: GrupoPerguntaFichaColetaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Grupo de Pergunta da Ficha de Coleta - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-grupo-pergunta-ficha-coleta-detalhar',
  templateUrl: './grupo-pergunta-ficha-coleta.component.html',
  styleUrls: ['./grupo-pergunta-ficha-coleta.component.css']
})
export class GrupoPerguntaFichaColetaDetalharComponent extends GenericComponent<GrupoPerguntaFichaColeta> implements OnInit {

  constructor(private servico: GrupoPerguntaFichaColetaService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Grupo de Pergunta da Ficha de Coleta - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
