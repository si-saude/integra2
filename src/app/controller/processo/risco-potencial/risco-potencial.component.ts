import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RiscoPotencial } from './../../../model/risco-potencial.model';
import { RiscoPotencialFilter } from './../../../filter/risco-potencial.filter';
import { RiscoPotencialService } from './../../../service/risco-potencial.service';

@Component({
  selector: 'app-risco-potencial',
  templateUrl: './risco-potencial.component.html',
  styleUrls: ['./risco-potencial.component.css']
})
export class RiscoPotencialComponent implements OnInit {

  private riscos: Array<RiscoPotencial>;

  constructor(private servico: RiscoPotencialService, private router: Router) {
    this.router.routerState.snapshot.url = 'Risco Potencial';
  }

  ngOnInit() {
    const filter = this.servico.initializeFilter();
    filter.$pageSize = 1000000;
    this.servico.list(filter, (res) => {
      const list = res.json().list;
      if (list && list.length > 0) {
        this.riscos = this.servico.toList(list);
        
        let x = 0;
        for (let risco of this.riscos) {
          x++;
          risco.$ranking = x;
        }
      } else {
        this.riscos = undefined;
      }
    }, undefined);
  }

  getClass(a) {
    const risco: RiscoPotencial = a[0][0];
    if (risco.$valor < 0.364) {
      return 'row-verde';
    } else if (risco.$valor >= 0.364 && risco.$valor < 0.775) {
      return 'row-amarelo';
    } else {
      return 'row-vermelho';
    }
  }
}
