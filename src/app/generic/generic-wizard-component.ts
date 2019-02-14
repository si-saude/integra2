import { Router, ActivatedRoute } from '@angular/router';

import { GenericComponent } from './generic-component';
import { GenericFilter } from './generic-filter';
import { GenericService } from './generic-service';

export class GenericWizardComponent<T> extends GenericComponent<T> {

    private previous: string;
    private next: string;
    
    constructor(protected service: GenericService<T, GenericFilter>, protected rtr: Router,
        protected rt: ActivatedRoute, protected title: string, previous: string, next: string) {
            super(service,rtr,rt,title);
            this.previous = previous;
            this.next = next;
    }

    goPrevious() {

    }

    goNext() {
        
    }
}