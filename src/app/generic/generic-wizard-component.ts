import { Router, ActivatedRoute } from '@angular/router';

import { GenericComponent } from './generic-component';
import { GenericFilter } from './generic-filter';
import { GenericService } from './generic-service';
import { WizardService } from './../util/wizard-service/wizard-service.service';

export class GenericWizardComponent<T> extends GenericComponent<T> {
    
    protected first: string;
    
    constructor(protected service: GenericService<T, GenericFilter>, protected rtr: Router,
        protected rt: ActivatedRoute, protected title: string, protected wizardService: WizardService<T>,
        protected previous: string, protected next: string, protected _submit: string) {
            super(service,rtr,rt,title);
            this.getData();
    }

    getData() {
        if (this.wizardService.getData()) {
            this.t = this.wizardService.getData();
            this.first = this.wizardService.getFirst();
            this.wizardService.clean();
        }
    }

    do(path) {
        this.wizardService.setData(this.t);
        this.wizardService.setFirst(this.first);
        this.rtr.navigate([path]);
    }

    goFirst() {
        this.rtr.navigate([this.first]);
    }

    goPrevious() {
        if (this.previous) {
            this.do(this.previous);
        }
    }

    goNext() {
        if (this.next) {
            this.do(this.next);
        } else {
            this.submit();
        }
    }

    submit() {
        if (this._submit) {
            this.initSave();
            this.service[this._submit](this.t, (res) => {
                this.goFirst();
            }, (error) => {
                this.finishSave();
            });
        }
    }
}