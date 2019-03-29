import { Injectable } from '@angular/core';


import { Atendimento } from 'app/model/atendimento.model';
import { DialogService } from 'app/util/dialog/dialog.service';
import { IValidator } from 'app/generic/ivalidator';

@Injectable()
export class CriarAtendimentoAvulsoValidator implements IValidator<Atendimento> {


    constructor(private dialogService: DialogService) {
    }

    validate(atendimento: Atendimento): boolean {
        if (!atendimento) {
            this.dialogService.show('Não foi possível obter as informações do atendimento.');
            return false;
        }
        else if (!atendimento.$tarefa || !atendimento.$tarefa.$cliente || atendimento.$tarefa.$cliente.$id === 0) {
            this.dialogService.show('Não foi possível obter as informações do empregado.');
            return false;
        }
        else if (!atendimento.$tarefa.$equipe || atendimento.$tarefa.$equipe.$id === 0) {
            this.dialogService.show('Não foi possível obter as informações da equipe.');
            return false;
        } else if (!atendimento.$tarefa.$servico || atendimento.$tarefa.$servico.$id === 0) {
            this.dialogService.show('Não foi possível obter as informações do serviço.');
            return false;
        }
        return true;
    }
}
