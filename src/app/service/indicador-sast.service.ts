import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { BooleanFilter } from './../generic/boolean-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { IndicadorSast } from '../model/indicador-sast.model';
import { IndicadorSastFilter } from '../filter/indicador-sast.filter';
import { IndicadorAssociadoSast } from '../model/indicador-associado-sast.model';
import { EquipeService } from './equipe.service';

@Injectable()
export class IndicadorSastService extends GenericService<IndicadorSast, IndicadorSastFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private equipeService: EquipeService) {
        super(http, 'indicador-sast', router, dialogService, spinnerService);
    }

    initializeObject() {
        const i = new IndicadorSast();
        i.$indicadorAssociadoSasts = new Array<IndicadorAssociadoSast>();
        return i;
    }

    initializeFilter() {
        const f = new IndicadorSastFilter();
        f.$equipe = this.equipeService.initializeFilter();
        f.$obrigatorio = new BooleanFilter();
        f.$ausenteCalculoInterdisciplinar = new BooleanFilter();
        f.$inativo = new BooleanFilter();
        return f;
    }

    toObject(obj: any): IndicadorSast {
        const indicadorSast: IndicadorSast = new IndicadorSast();
        indicadorSast.$id = obj['id'];
        indicadorSast.$nome = obj['nome'];
        indicadorSast.$codigo = obj['codigo'];
        indicadorSast.$codigoExcludente = obj['codigoExcludente'];
        indicadorSast.$critico = obj['critico'];
        indicadorSast.$indice0 = obj['indice0'];
        indicadorSast.$indice1 = obj['indice1'];
        indicadorSast.$indice2 = obj['indice2'];
        indicadorSast.$indice3 = obj['indice3'];
        indicadorSast.$indice4 = obj['indice4'];
        indicadorSast.$obrigatorio = obj['obrigatorio'];
        indicadorSast.$ausenteCalculoInterdisciplinar = obj['ausenteCalculoInterdisciplinar'];
        indicadorSast.$inativo = obj['inativo'];
        indicadorSast.$version = obj['version'];

        if (this.helper.isNotNull(obj['equipe'])) {
            indicadorSast.$equipe = this.equipeService.toObject(obj['equipe']);
        }

        indicadorSast.$indicadorAssociadoSasts = new Array<IndicadorAssociadoSast>();
        if (obj['indicadorAssociadoSasts']) {
            for (let x = 0; x < obj['indicadorAssociadoSasts'].length; x++) {
                const indicadorAssociado: IndicadorAssociadoSast = this.toIndicadorAssociadoSast(obj['indicadorAssociadoSasts'][x]);
                indicadorAssociado.$indicadorSast.$id = indicadorSast.$id;
                indicadorSast.$indicadorAssociadoSasts.push(indicadorAssociado);
            }
        }
        return indicadorSast;
    }

    toIndicadorAssociadoSast(obj: IndicadorAssociadoSast): IndicadorAssociadoSast{
        const indicadorAssociado: IndicadorAssociadoSast = new IndicadorAssociadoSast();
        indicadorAssociado.$id = obj['id'];
        indicadorAssociado.$indicadorSast = new IndicadorSast();
        indicadorAssociado.$codigo = obj['codigo'];
        indicadorAssociado.$version = obj['version'];
        return indicadorAssociado;
    }

    getEquipeService() {
        return this.equipeService;
    }
}
