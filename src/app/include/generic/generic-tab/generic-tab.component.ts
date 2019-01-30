import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-generic-tab',
  templateUrl: './generic-tab.component.html',
  styleUrls: ['./generic-tab.component.css']
})
export class GenericTabComponent implements AfterViewInit {

  @Input() tabs: Array<Array<any>>;

  constructor() { }

  ngAfterViewInit() {
    this.show(0);
  }

  show(index) {
    this.hideAll();
    this.tabs[index][0].style.display = '';
    const style = document.getElementById('tab-link-' + index).style;
    style.textDecoration = 'underline';
    style.fontWeight = 'bold';
  }

  hide(index) {
    this.tabs[index][0].style.display = 'none';
    const style = document.getElementById('tab-link-' + index).style;
    style.textDecoration = '';
    style.fontWeight = '';
  }

  hideAll() {
    for (let i = 0; i < this.tabs.length; i++) {
      this.hide(i);
    }
  }
}
