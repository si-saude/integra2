import { Component, OnInit, Input } from '@angular/core';

import { HomeComponent } from './../../../home/home.component';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.css']
})
export class MenuOptionComponent implements OnInit {

  @Input() homeComponent: HomeComponent;
  @Input() routerLink: string;
  @Input() funcionalidade: string;
  @Input() label: string;
  @Input() group: string;

  constructor() { }

  ngOnInit() {
  }

  check(): boolean {
    if (this.group) {
      switch (this.group) {
        case 'CADASTRO':
          return this.checkCadastro();
        case 'PROCESSO':
          return this.checkProcesso();
        case 'REPORT':
          return this.checkReport();
      }
    } else {
      return this.checkCadastro();
    }
  }

  checkCadastro(): boolean {
    return this.homeComponent.checkCadastro(this.funcionalidade);
  }

  checkProcesso(): boolean {
    return this.homeComponent.checkProcesso(this.funcionalidade);
  }

  checkReport(): boolean {
    return this.homeComponent.checkReport(this.funcionalidade);
  }
}
