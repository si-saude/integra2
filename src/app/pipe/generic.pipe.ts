import {Pipe, PipeTransform} from '@angular/core';

import { Helper } from './../generic/helper';

@Pipe({name: 'genericPipe'})
export class GenericPipe implements PipeTransform {

    transform(value: string, type: string) {
        if (type && type.toString().trim().length > 0) {
            switch (type) {
                case 'phone':
                    value = Helper.toPhoneFormat(value);
                break;
            }
        }
        return value;
    }
}
