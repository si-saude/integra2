import { OnInit, Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';

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
  private riscoPotencial: RiscoPotencial;
  private graficoUtil: RiscoEmpregadoGraficoUtil;

  @ViewChild('modalDetalhes') modalDetalhes;
  @ViewChild('baseChart') chart: BaseChartDirective;

  constructor(private servico: RiscoPotencialService, private router: Router) {
    this.router.routerState.snapshot.url = 'Risco Potencial';

    this.graficoUtil = new RiscoEmpregadoGraficoUtil();

    this.riscoPotencial = this.servico.initializeObject();
    this.riscoPotencial.$empregado = this.servico.getEmpregadoService().initializeObject();
    this.riscoPotencial.$responsavel = this.servico.getEquipeService().initializeObject();
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

    this.graficoUtil.initializeChart();
  }

  getClass(a) {
    const risco: RiscoPotencial = a[0][0];
    if (risco.$valor < 0.57) {
      return 'row-verde';
    } else if (risco.$valor >= 0.57 && risco.$valor < 0.725) {
      return 'row-amarelo';
    } else {
      return 'row-vermelho';
    }
  }

  openDetalhes(obj) {
    this.riscoPotencial = obj[0][0];

    this.graficoUtil.initializeChart();
    this.chart = this.graficoUtil.configChart(this.riscoPotencial, this.chart);
    this.modalDetalhes.openObject();
  }
}




export class RiscoEmpregadoGraficoUtil {

  private barChartOptions: any;
  private barChartLabels: Array<string>;
  private barChartType: string;
  private barChartLegend: boolean;
  private barChartData: Array<any>;
  private barChartColors: Array<any>;


  constructor() {
    this.initializeChart();
  }

  getColorByValue(value) {
    if (value < 0.57) {
      return '#00ff11';
    } else if (value >= 0.57 && value < 0.725) {
      return '#ffcc00';
    } else {
      return '#ff1100';
    }
  }

  configChart(riscoPotencial, chart) {
    const arrayColor = [];
    const arrayData = [];
    const arrayLineData = [];

    for (let i = 0; i < riscoPotencial.$riscos.length; i++) {
      this.barChartLabels.push(riscoPotencial.$riscos[i].$equipe.$nome);
      arrayColor.push(this.getColorByValue(riscoPotencial.$riscos[i].$valor));
      arrayData.push(riscoPotencial.$riscos[i].$valor);
      arrayLineData.push(riscoPotencial.$valor);
    }

    const jsonColor = { backgroundColor: arrayColor };
    const jsonLineData = {
      data: arrayLineData,
      backgroundColor: [this.getColorByValue(riscoPotencial.$valor)],
      fill: false,
      borderWidth: 10,
      type: 'line'
    };
    const jsonData = { data: arrayData, legend: { fontSize: 9 } };

    this.barChartColors.splice(0, 0, jsonLineData);
    this.barChartColors.push(jsonColor);
    this.barChartData.push(jsonLineData);
    this.barChartData.push(jsonData);

    chart.chart.destroy();
    chart.chart = 0;
    chart.labels = this.barChartLabels;
    chart.datasets = this.barChartData;
    chart.colors = this.barChartColors;
    chart.ngOnInit();

    return chart;
  }

  initializeChart() {
    this.barChartOptions = {
      scaleShowVerticalLines: true,
      scales: {
        yAxes: [{ ticks: { beginAtZero: true } }],
        xAxes: [{ ticks: { fontSize: 9, position: 'top' } }]
      },
      responsive: true
    };
    this.barChartType = 'bar';
    this.barChartLegend = false;
    this.barChartLabels = new Array<string>();
    this.barChartData = [{ data: [] }];
    this.barChartColors = [{}];
  }
}


