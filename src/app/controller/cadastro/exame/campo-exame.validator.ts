import { Injectable } from '@angular/core';

import { Helper } from './../../../generic/helper';
import { IValidator } from './../../../generic/ivalidator';
import { DialogService } from './../../../util/dialog/dialog.service';

import { CampoExame } from './../../../model/campo-exame.model';

@Injectable()
export class CampoExameValidator implements IValidator<CampoExame> {

    private helper: Helper;

    constructor(private dialogService: DialogService) {
        this.helper = new Helper();
    }

    validate(campo: CampoExame): boolean {
        let message: string;
        if (!campo.$codigo) {
            message = 'Informe o Código do Campo do Exame';
        } else if (!campo.$titulo) {
            message = 'Informe o Título do Campo do Exame';
        } else if (campo.$numeroLinhas && campo.$numeroLinhas.toString() !== ''
            && this.helper.getOnlyNumber(campo.$numeroLinhas.toString()) !== campo.$numeroLinhas.toString()) {
            message = 'Informe um número válido para Campo do Exame';
        }

        if (message) {
            this.dialogService.show(message);
            return false;
        }

        return true;
    }
}
