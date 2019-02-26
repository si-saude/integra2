import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../generic/generic-service';
import { Router } from '@angular/router';

import { BooleanFilter } from './../generic/boolean-filter';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';

import { Criterio } from '../model/criterio.model';
import { Profissiograma } from '../model/profissiograma.model';
import { ProfissiogramaExame } from '../model/profissiograma-exame.model';
import { ProfissiogramaGrupo } from '../model/profissiograma-grupo.model';
import { ProfissiogramaFilter } from '../filter/profissiograma.filter';
import { CriterioService } from './criterio.service';
import { ExameService } from './exame.service';
import { GrupoMonitoramentoService } from './grupo-monitoramento.service';
import { UtilService } from './util.service';

@Injectable()
export class ProfissiogramaService extends GenericService<Profissiograma, ProfissiogramaFilter> {
    constructor(http: Http, router: Router, private dialogService: DialogService,
        private spinnerService: SpinnerService, private criterioService: CriterioService,
        private exameService: ExameService, private grupoMonitoramentoService: GrupoMonitoramentoService,
        private utilService: UtilService) {
        super(http, 'profissiograma', router, dialogService, spinnerService);
    }

    initializeObject() {
        const profissiograma: Profissiograma = new Profissiograma();
        profissiograma.$profissiogramaGrupos = new Array<ProfissiogramaGrupo>();

        return profissiograma;
    }

    initializeFilter() {
        const f: ProfissiogramaFilter = new ProfissiogramaFilter();
        f.$concluido = new BooleanFilter();
        return f;
    }

    toObject(obj: Profissiograma): Profissiograma {
        const profissiograma: Profissiograma = new Profissiograma();
        profissiograma.$id = obj['id'];
        profissiograma.$nome = obj['nome'];
        profissiograma.$vinculo = obj['vinculo'];
        profissiograma.$concluido = obj['concluido'];
        profissiograma.$version = obj['version'];

        profissiograma.$profissiogramaGrupos = new Array<ProfissiogramaGrupo>();
        if (obj['profissiogramaGrupos']) {
            for (let x = 0; x < obj['profissiogramaGrupos'].length; x++) {
                const profissiogramaGrupo: ProfissiogramaGrupo = this.toProfissiogramaGrupo(obj['profissiogramaGrupos'][x]);
                profissiogramaGrupo.$profissiograma.$id = profissiograma.$id;

                profissiograma.$profissiogramaGrupos.push(profissiogramaGrupo);
            }
        }

        return profissiograma;
    }

    toProfissiogramaGrupo(obj: ProfissiogramaGrupo): ProfissiogramaGrupo {
        const profissiogramaGrupo: ProfissiogramaGrupo = new ProfissiogramaGrupo();
        profissiogramaGrupo.$id = obj['id'];
        profissiogramaGrupo.$version = obj['version'];

        profissiogramaGrupo.$profissiograma = new Profissiograma();

        if (this.helper.isNotNull(obj['grupoMonitoramento'])) {
            profissiogramaGrupo.$grupoMonitoramento = this.grupoMonitoramentoService.toObject(obj['grupoMonitoramento']);
        }

        profissiogramaGrupo.$profissiogramaExames = new Array<ProfissiogramaExame>();
        if (obj['profissiogramaExames']) {
            for (let x = 0; x < obj['profissiogramaExames'].length; x++) {
                const profissiogramaExame: ProfissiogramaExame = this.toProfissiogramaExame(obj['profissiogramaExames'][x]);
                profissiogramaExame.$profissiogramaGrupo.$id = profissiogramaGrupo.$id;

                profissiogramaGrupo.$profissiogramaExames.push(profissiogramaExame);
            }
        }

        return profissiogramaGrupo;
    }

    toProfissiogramaExame(obj: ProfissiogramaExame): ProfissiogramaExame {
        const profissiogramaExame: ProfissiogramaExame = new ProfissiogramaExame();
        profissiogramaExame.$id = obj['id'];
        profissiogramaExame.$opcional = obj['opcional'];
        profissiogramaExame.$version = obj['version'];

        profissiogramaExame.$profissiogramaGrupo = new ProfissiogramaGrupo();

        if (this.helper.isNotNull(obj['exame'])) {
            profissiogramaExame.$exame = this.exameService.toObject(obj['exame']);
        }

        profissiogramaExame.$criterios = new Array<Criterio>();
        if (obj['criterios']) {
            for (let x = 0; x < obj['criterios'].length; x++) {
                const criterio: Criterio = this.criterioService.toObject(obj['criterios'][x]);

                profissiogramaExame.$criterios.push(criterio);
            }
        }

        return profissiogramaExame;
    }

    public getCriterioService(): CriterioService {
        return this.criterioService;
    }

    public getExameService(): ExameService {
        return this.exameService;
    }

    public getGrupoMonitoramentoService(): GrupoMonitoramentoService {
        return this.grupoMonitoramentoService;
    }

    public getUtilService(): UtilService {
        return this.utilService;
    }
}
