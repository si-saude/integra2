import { GenericFilter } from './../generic/generic-filter';

import { CheckinFilter } from './checkin.filter';
import { QuestionarioFilter } from './questionario.filter';

export class AvaliacaoAtendimentoFilter extends GenericFilter {
    private status: string;
    private checkin: CheckinFilter;
    private questionario: QuestionarioFilter;

    public get $status(): string {
        return this.status;
    }

    public set $status(value: string) {
        this.status = value;
    }

    public get $checkin(): CheckinFilter {
        return this.checkin;
    }

    public set $checkin(value: CheckinFilter) {
        this.checkin = value;
    }

    public get $questionario(): QuestionarioFilter {
        return this.questionario;
    }

    public set $questionario(value: QuestionarioFilter) {
        this.questionario = value;
    }
}
