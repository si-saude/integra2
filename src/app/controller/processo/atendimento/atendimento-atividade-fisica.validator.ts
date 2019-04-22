import { Injectable } from '@angular/core';

import { IValidator } from './../../../generic/ivalidator';
import { DialogService } from './../../../util/dialog/dialog.service';

import { AtendimentoAtividadeFisica } from './../../../model/atendimento-atividade-fisica.model';

@Injectable()
export class AtendimentoAtividadeFisicaValidator implements IValidator<AtendimentoAtividadeFisica> {
    constructor(private dialogService: DialogService) {

    }

    validate(atendimentoAtividadeFisica: AtendimentoAtividadeFisica): boolean {
        if (!atendimentoAtividadeFisica.$domingo && !atendimentoAtividadeFisica.$segunda &&
            !atendimentoAtividadeFisica.$terca && !atendimentoAtividadeFisica.$quarta &&
            !atendimentoAtividadeFisica.$quinta && !atendimentoAtividadeFisica.$sexta &&
            !atendimentoAtividadeFisica.$sabado) {
            this.dialogService.show('Não foi possível confirmar, pois ao menos um dia precisa ser selecionado.');
            return false;
        }
        return true;
    }
}
