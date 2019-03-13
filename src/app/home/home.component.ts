import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GuardService } from './../guard/guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private init = false;
  private showMenu = false;

  constructor(private router: Router, private guardService: GuardService) {

  }

  ngOnInit() {
    this.router.routerState.snapshot.url = '';
  }

  checkCadastro(funcionalidade): boolean {
    return this.guardService.checkCadastro(funcionalidade);
  }

  checkProcesso(funcionalidade): boolean {
    return this.guardService.checkProcesso(funcionalidade);
  }

  checkReport(funcionalidade): boolean {
    return this.guardService.checkReport(funcionalidade);
  }

  toggleSidebar() {
    this.showMenu = !this.showMenu;
    document.getElementById('sidebar').style.left = this.showMenu ? '0%' : '-18%';
  }

  goToPrincipal() {
    document.getElementById('principal').style.display = '';
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('processo').style.display = 'none';
    document.getElementById('relatorio').style.display = 'none';
  }

  goToCadastro() {
    document.getElementById('principal').style.display = 'none';
    document.getElementById('cadastro').style.display = '';
  }

  goToProcesso() {
    document.getElementById('principal').style.display = 'none';
    document.getElementById('processo').style.display = '';
  }

  goToRelatorio() {
    document.getElementById('principal').style.display = 'none';
    document.getElementById('relatorio').style.display = '';
  }

  logout() {
    localStorage.clear();
    this.guardService.clear();
    this.router.navigate(['/login']);
  }
}
