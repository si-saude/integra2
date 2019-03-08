import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { EmpregadoService } from '../service/empregado.service';
import { EquipeService } from '../service/equipe.service';
import { RiscoEmpregado } from '../model/risco-empregado.model';
import { RiscoPotencial } from '../model/risco-potencial.model';
import { RiscoPotencialFilter } from '../filter/risco-potencial.filter';

@Injectable()
export class RiscoPotencialService extends GenericService<RiscoPotencial, RiscoPotencialFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private empregadoService: EmpregadoService,
        private equipeService: EquipeService, ) {
        super(http, 'risco-potencial', router, dialogService, spinnerService);
    }

    initializeObject() {
        const riscoPotencial: RiscoPotencial = new RiscoPotencial();
        riscoPotencial.$riscos = new Array<RiscoEmpregado>();
        return riscoPotencial;
    }

    initializeRiscoEmpregado() {
        return new RiscoEmpregado();
    }

    initializeFilter() {
        const f = new RiscoPotencialFilter();
        f.$empregado = this.getEmpregadoService().initializeFilter();
        f.$responsavel = this.getEquipeService().initializeFilter();

        return f;
    }

    toObject(obj: any): RiscoPotencial {
        const riscoPotencial: RiscoPotencial = new RiscoPotencial();
        riscoPotencial.$id = obj['id'];
        riscoPotencial.$status = obj['status'];
        riscoPotencial.$valor = obj['valor'];
        riscoPotencial.$version = obj['version'];

        if (this.helper.isNotNull(obj['empregado'])) {
            riscoPotencial.$empregado = this.empregadoService.toObject(obj['empregado']);
        }

        if (this.helper.isNotNull(obj['responsavel'])) {
            riscoPotencial.$responsavel = this.equipeService.toObject(obj['responsavel']);
        }

        riscoPotencial.$riscos = new Array<RiscoEmpregado>();
        if (obj['riscos']) {
            for (let x = 0; x < obj['riscos'].length; x++) {
                const riscoEmpregado: RiscoEmpregado = this.toRiscoEmpregado(obj['riscos'][x]);
                riscoEmpregado.$risco.$id = riscoPotencial.$id;

                riscoPotencial.$riscos.push(riscoEmpregado);
            }
        }

        return riscoPotencial;
    }

    toRiscoEmpregado(obj: RiscoEmpregado): RiscoEmpregado {
        let riscoEmpregado: RiscoEmpregado = new RiscoEmpregado();
        riscoEmpregado.$id = obj['id'];
        riscoEmpregado.$status = obj['status'];
        riscoEmpregado.$valor = obj['valor'];
        riscoEmpregado.$version = obj['version'];

        if (this.helper.isNotNull(obj['equipe'])) {
            riscoEmpregado.$equipe = this.equipeService.toObject(obj['equipe']);
        }

        riscoEmpregado = this.transformDate(obj, riscoEmpregado, 'data');
        riscoEmpregado.$risco = new RiscoPotencial();

        return riscoEmpregado;
    }

    getEmpregadoService(): EmpregadoService {
        return this.empregadoService;
    }

    getEquipeService(): EquipeService {
        return this.equipeService;
    }
}
