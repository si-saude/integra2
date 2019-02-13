import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { BooleanFilter } from './../generic/boolean-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Alimento } from '../model/alimento.model';
import { AlimentoFilter } from '../filter/alimento.filter';
import { AlimentoMedidaCaseira } from '../model/alimento-medida-caseira.model';
import { MedidaCaseira } from '../model/medida-caseira.model';
import { MedidaCaseiraService } from './../service/medida-caseira.service';
import { UtilService } from '../service/util.service';

@Injectable()
export class AlimentoService extends GenericService<Alimento, AlimentoFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private utilService: UtilService,
        private medidaCaseiraService: MedidaCaseiraService) {
        super(http, 'alimento', router, dialogService, spinnerService);
    }

    initializeObject() {
        const i = new Alimento();
        i.$alimentosMedidaCaseira = new Array<AlimentoMedidaCaseira>();
        i.$substituicoes = new Array<Alimento>();
        return i;
    }

    initializeFilter() {
        const f = new AlimentoFilter();
        f.$inativo = new BooleanFilter();
        return f;
    }

    toObject(obj: any): Alimento {
        const alimento: Alimento = new Alimento();
        alimento.$id = obj['id'];
        alimento.$nome = obj['nome'];
        alimento.$tipo = obj['tipo'];
        alimento.$padrao = obj['padrao'];
        alimento.$energia = obj['energia'];
        alimento.$proteina = obj['proteina'];
        alimento.$lipideos = obj['lipideos'];
        alimento.$saturada = obj['saturada'];
        alimento.$monoinsaturada = obj['monoinsaturada'];
        alimento.$poliinsaturada = obj['poliinsaturada'];
        alimento.$omega6 = obj['omega6'];
        alimento.$omega3 = obj['omega3'];
        alimento.$colesterol = obj['colesterol'];
        alimento.$cho = obj['cho'];
        alimento.$fibra = obj['fibra'];
        alimento.$calcio = obj['calcio'];
        alimento.$mg = obj['mg'];
        alimento.$mn = obj['mn'];
        alimento.$p = obj['p'];
        alimento.$ferro = obj['ferro'];
        alimento.$sodio = obj['sodio'];
        alimento.$potassio = obj['potassio'];
        alimento.$cobre = obj['cobre'];
        alimento.$zinco = obj['zinco'];
        alimento.$retinol = obj['retinol'];
        alimento.$tiamina = obj['tiamina'];
        alimento.$riboflavina = obj['riboflavina'];
        alimento.$piridoxina = obj['piridoxina'];
        alimento.$niacina = obj['niacina'];
        alimento.$vitc = obj['vitc'];
        alimento.$vitd = obj['vitd'];
        alimento.$vite = obj['vite'];
        alimento.$inativo = obj['inativo'];
        alimento.$version = obj['version'];

        alimento.$substituicoes = new Array<Alimento>();
        if (obj['substituicoes']) {
            for (let x = 0; x < obj['substituicoes'].length; x++) {
                const substituicao: Alimento = this.toObject(obj['substituicoes'][x]);
                alimento.$substituicoes.push(substituicao);
            }
        }

        alimento.$alimentosMedidaCaseira = new Array<AlimentoMedidaCaseira>();
        if (obj['alimentosMedidaCaseira']) {
            for (let x = 0; x < obj['alimentosMedidaCaseira'].length; x++) {
                const alimentoMedidaCaseira: AlimentoMedidaCaseira = this.toAlimentoMedidaCaseira(obj['alimentosMedidaCaseira'][x]);
                alimentoMedidaCaseira.$alimento.$id = alimento.$id;

                alimento.$alimentosMedidaCaseira.push(alimentoMedidaCaseira);
            }
        }

        return alimento;
    }

    toAlimentoMedidaCaseira(obj: AlimentoMedidaCaseira): AlimentoMedidaCaseira {
        const alimentoMedidaCaseira: AlimentoMedidaCaseira = new AlimentoMedidaCaseira();
        alimentoMedidaCaseira.$id = obj['id'];
        alimentoMedidaCaseira.$referencia = obj['referencia'];
        alimentoMedidaCaseira.$quantidade = obj['quantidade'];
        alimentoMedidaCaseira.$version = obj['version'];
        alimentoMedidaCaseira.$alimento = new Alimento();

        if (this.helper.isNotNull(obj['medidaCaseira'])) {
            alimentoMedidaCaseira.$medidaCaseira = this.medidaCaseiraService.toObject(obj['medidaCaseira']);
        }

        return alimentoMedidaCaseira;
    }

    getMedidaCaseiraService(): MedidaCaseiraService {
        return this.medidaCaseiraService;
    }

    getUtilService(): UtilService {
        return this.utilService;
    }
}
