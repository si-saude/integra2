import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { Helper } from './../../../generic/helper';
import { GenericFilter } from './../../../generic/generic-filter';
import { GenericComponent } from './../../../generic/generic-component';
import { GenericService } from './../../../generic/generic-service';

@Component({
  selector: 'app-generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.css']
})
export class GenericGridComponent<T, F extends GenericFilter, G> implements OnInit {

  @Input() id: string;
  @Input() def: Array<Array<string>>;
  @Input() array: Array<any>;
  @Input() component: GenericComponent<T>;
  @Input() delete = false;
  @Input() height = '300px';

  private helper: Helper;
  private models: Array<Array<any>>;
  private proxy: Array<any>;

  constructor() {
    this.helper = new Helper();
  }

  ngOnInit() {
  }

  ngOnChanges( changes: SimpleChanges ) {
    this.load();
  }

  add(obj: G) {
    if (obj['id'] > 0) {
      if (this.array.find(a => a['id'] === obj['id'])) {
        this.component.getService().showMessage('O registro já foi adicionado.');
        return;
      }
    }

    this.array.push(obj);
    this.load();
    this.dirtyForm();
  }

  load() {
    this.models = new Array<Array<any>>();
    if (this.array && this.def) {
      this.proxy = new Array<any>();
      for (let a of this.array) {
        let ar = new Array<any>();
        for (let d of this.def) {
          ar.push(this.getObjectAndProperty(a, d[1]));
        }
        this.models.push(ar);
        this.proxy.push(a);
      }
    }
  }

  getObjectAndProperty(obj: any, properties: string) {
    return this.helper.getObjectAndProperty(obj, properties);
  }

  remove(i) {
    this.array.splice(i, 1);
    this.load();
    this.dirtyForm();
  }

  selectAll(property, event) {
    for (let a of this.array) {
      const ar = this.getObjectAndProperty(a, property);
      ar[0][ar[1]] = event.target.checked;
    }
    this.load();
  }

  dirtyForm() {
    this.helper.dirtyForm(this.component);
  }
}
