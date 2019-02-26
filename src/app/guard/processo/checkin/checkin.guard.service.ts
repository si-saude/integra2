import { GenericGuard } from './../../../generic/generic-guard';
import { Injectable } from '@angular/core';

import { GenericGuardService } from './../../../generic/generic-guard.service';
import * as guard from './checkin.guard';

@Injectable()
export class CheckinGuardService implements GenericGuardService {

    constructor(private checkin: guard.CheckinGuard) {

    }

    hasPermission(funcionalidade: String): GenericGuard {
        let guard: GenericGuard;
        switch (funcionalidade) {
            case 'CHECKIN_CHECKIN': {
                guard = this.checkin;
                break;
            }
        }
        return guard;
    }
}
