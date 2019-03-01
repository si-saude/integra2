import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { GenericGuard } from './../../../generic/generic-guard';

import { UsuarioService } from './../../../service/usuario.service';
import * as checkinController from './../../../controller/processo/checkin/checkin.component';
import * as checkoutController from './../../../controller/processo/checkin/checkout/checkout.component';

@Injectable()
export class CheckinGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CHECKIN_CHECKIN');
  }
}

@Injectable()
export class CheckoutGuard extends GenericGuard {
  constructor(private r: Router, private servico: UsuarioService) {
      super(r, servico, 'CHECKIN_CHECKOUT');
  }
}

export class Routing {
    public static route(homeComponent): Route {
        return { path: 'checkin', component: homeComponent,
            children: [{ path: '',
                component: checkinController.CheckinComponent, canActivate: [CheckinGuard]},
                { path: 'checkout',
                component: checkoutController.CheckoutComponent, canActivate: [CheckoutGuard]}] };
    }
}