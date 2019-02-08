import {Pipe, PipeTransform} from '@angular/core';

import { Helper } from './../generic/helper';

@Pipe({name: 'gridFilter'})
export class GridFilterPipe implements PipeTransform {

    private helper: Helper;

    constructor() {
        this.helper = new Helper();
    }

    transform(array: any[], filter) {
        array = array ? array.filter(a => {
            let index = 0;
            for (let key of Object.keys(filter)) {
                if (filter[key] && filter[key] !== '') {
                    if (!a[index][0][a[index][1]].toLowerCase().includes(filter[key].toLowerCase())) {
                        return false;
                    }
                    index++;
                }
            }
            return true;
        }) : array;
        console.log(array);
        return array;
    }
}
