import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[integerValidator][formControlName],[integerValidator][formControl],[integerValidator][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => IntegerValidatorDirective), multi: true }
    ]
})
export class IntegerValidatorDirective implements Validator {
    constructor() {}

    validate(c: AbstractControl): { [key: string]: any } {
        if (c.value && c.value.toString().replace( /\D/g, '' ) !== c.value.toString()) {
            return {
                integerValidate: false
            };
        }
        return null;
    }
}
