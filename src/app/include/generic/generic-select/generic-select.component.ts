import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Helper } from './../../../generic/helper';

@Component({
  selector: 'app-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['./generic-select.component.css']
})
export class GenericSelectComponent implements OnInit {

  @Input() component;
  @Input() name: string;
  @Input() array: Array<any>;
  @Input() property: string;
  @Input() object;

  @Output() changeValue = new EventEmitter();

  private helper: Helper;

  constructor() {
    this.helper = new Helper();
  }

  ngOnInit() {
  }

  dirtyForm() {
    if (this.component.form) {
      this.helper.dirtyForm(this.component);
    }
  }

  change() {
    this.changeValue.emit(this.object);
  }
}
