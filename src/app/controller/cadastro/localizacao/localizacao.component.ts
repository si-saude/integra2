import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenericListComponent } from './../../../generic/generic-list-component';
import { GenericComponent } from './../../../generic/generic-component';

import { Localizacao } from './../../../model/localizacao.model';
import { LocalizacaoFilter } from './../../../filter/localizacao.filter';
import { LocalizacaoService } from './../../../service/localizacao.service';

@Component({
  selector: 'app-localizacao-listar',
  templateUrl: './localizacao.listar.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoListarComponent extends GenericListComponent<Localizacao, LocalizacaoFilter> implements OnInit {

  constructor(private servico: LocalizacaoService, private router: Router) {
    super(servico, router, 'Localização',
      [
        ['Nome', 'nome']
      ]);
  }

  ngOnInit() {
    this.page(1);
  }
}

@Component({
  selector: 'app-localizacao-adicionar',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoAdicionarComponent extends GenericComponent<Localizacao> implements OnInit {

  constructor(private servico: LocalizacaoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Localização - Adicionar');
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-localizacao-editar',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoEditarComponent extends GenericComponent<Localizacao> implements OnInit {

  constructor(private servico: LocalizacaoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Localização - Editar');
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}

@Component({
  selector: 'app-localizacao-detalhar',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoDetalharComponent extends GenericComponent<Localizacao> implements OnInit {

  constructor(private servico: LocalizacaoService, router: Router, route: ActivatedRoute) {
    super(servico, router, route, 'Localização - Detalhar');
    this.detailMode();
  }

  ngOnInit() {
    this.init(function(obj){
    });
  }
}
