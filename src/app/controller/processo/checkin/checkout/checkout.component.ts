import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfirmService } from './../../../../util/confirm/confirm.service';
import { GenericListComponent } from './../../../../generic/generic-list-component';
import { GenericComponent } from './../../../../generic/generic-component';

import { Checkin } from './../../../../model/checkin.model';
import { CheckinFilter } from './../../../../filter/checkin.filter';
import { CheckinService } from './../../../../service/checkin.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends GenericListComponent<Checkin, CheckinFilter> implements OnInit {

  private util: CheckoutUtil;

  constructor(private servico: CheckinService, private router: Router, private confirmService: ConfirmService) {
    super(servico, router, 'Checkout',
      [
        ['Empregado', 'empregado.pessoa.nome'], ['Localização', 'localizacao.nome'],
        ['Chegada', 'chegadaFront'], ['Status', 'status']
      ]);
  }

  ngOnInit() {
    this.util = new CheckoutUtil(this.servico, this.confirmService, this);
    this.util.onInit();

    const hojeAux = this.servico.helper.getToday();

    const hoje = this.servico.helper.createDateFromString(hojeAux, false);
    const amanha = this.servico.helper.createDateFromString(hojeAux, false);
    amanha.setDate(amanha.getDate() + 1);

    this.filter.$chegada.$inicio = hoje.getTime();
    this.filter.$chegada.$fim = amanha.getTime();
    this.filter.$chegada = this.servico.transformDate(this.filter.$chegada, this.filter.$chegada, 'inicio');
    this.filter.$chegada = this.servico.transformDate(this.filter.$chegada, this.filter.$chegada, 'fim');

    this.filter.$chegada.$typeFilter = 'ENTRE';

    this.page(1);
  }
}

export class CheckoutUtil {

  statusCheckins: Array<string>;

  constructor(private servico: CheckinService, private confirmService: ConfirmService,
    private component: CheckoutComponent) {

  }

  onInit() {
    const component = this;
    this.servico.getUtilService().getStatusCheckin('', function (list) {
      component.statusCheckins = list;
    }, undefined);
  }

  checkOut(obj) {
    this.confirmService.show('Deseja realizar o check-out do empregado?', this.component, function (c) {
      c.getService().checkOut(obj, function (res) {
        c.callPage();
      }, undefined);
    }, undefined, undefined);
  }
}
