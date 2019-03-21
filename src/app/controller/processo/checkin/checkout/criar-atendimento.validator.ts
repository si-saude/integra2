import { Injectable } from '@angular/core';


import { Atendimento } from 'app/model/atendimento.model';
import { DialogService } from 'app/util/dialog/dialog.service';
import { IValidator } from 'app/generic/ivalidator';

@Injectable()
export class CriarAtendimentoValidator implements IValidator<Atendimento> {


    constructor(private dialogService: DialogService) {
    }

    validate(atendimento: Atendimento): boolean {
        if (!atendimento) {
            this.dialogService.show('Não foi possível obter as informações do atendimento.');
            return false;
        } else if (!atendimento.$checkin || atendimento.$checkin.$id === 0) {
            this.dialogService.show('Não foi possível obter as informações do checkin.');
            return false;
        } else if (!atendimento.$tarefa || atendimento.$tarefa.$id === 0) {
            this.dialogService.show('Não foi possível obter as informações da equipe.');
            return false;
        } else if (!atendimento.$fila || atendimento.$fila.$id === 0) {
            this.dialogService.show('Não foi possível obter as informações do profissional.');
            return false;
        }
        return true;
    }
}
