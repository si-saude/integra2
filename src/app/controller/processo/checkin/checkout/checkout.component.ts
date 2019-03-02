import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfirmService } from './../../../../util/confirm/confirm.service';
import { GenericListComponent } from './../../../../generic/generic-list-component';

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
    super(servico, router, 'Check-out',
      [
        ['Empregado', 'empregado.pessoa.nome'], ['Localização', 'localizacao.nome'],
        ['Chegada', 'chegadaFront'], ['Status', 'status']
      ]);
  }

  ngOnInit() {
    this.util = new CheckoutUtil(this.servico);
    this.util.onInit();
    const hoje = this.servico.helper.getToday();
    const amanha = this.servico.helper.createDateFromString(hoje, false);
    amanha.setDate(amanha.getDate() + 1);
    this.filter.$chegada.$inicioFront = hoje;
    this.filter.$chegada.$fimFront = this.servico.helper.dateToString(amanha);
    this.filter.$chegada.$typeFilter = 'ENTRE';
    this.page(1);
  }

  checkOut(obj) {
    this.confirmService.show('Deseja realizar o check-out do empregado?', this, function (c) {
      c.getService().checkOut(obj, function (res) {
        c.callPage();
      }, undefined);
    }, undefined, undefined);
  }
}

export class CheckoutUtil {

  statusCheckins: Array<string>;

  constructor(private servico: CheckinService) {

  }

  onInit() {
    const component = this;
    this.servico.getUtilService().getStatusCheckin('', function (list) {
      component.statusCheckins = list;
    }, undefined);
  }
}
