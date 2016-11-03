import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[validateEmail][ngModel],[validateEmail][formControlName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true }
  ]
})
export class EmailValidatorDirective {
  static validate(): ValidatorFn {
    return (c: FormControl) => {
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      return EMAIL_REGEXP.test(c.value) ? null : { validateEmail: true };
    };
  }
}
