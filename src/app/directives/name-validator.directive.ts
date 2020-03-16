import { Directive } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

interface Validation {
  valid: boolean;
}

// @Directive({
//   // tslint:disable-next-line: directive-selector
//   selector: '[nameValidator]',
//   // providers: [{provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true}]
// })
// export class NameValidatorDirective implements Validator {

//   constructor() { }
//   validate(control: AbstractControl): ValidationErrors | null {
//     console.log('validating!');
//     return {valid: true};
//   }
//   registerOnValidatorChange?(fn: () => void): void {
//     throw new Error('Method not implemented.');
//   }
// }

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // const forbidden = nameRe.test(control.value);
    // return forbidden ? {'forbiddenName': {value: control.value}} : null;
    console.log('validating!');
    console.log(control.value);
    if (control.value === 'Error') {
      // alert('test');
      return {validName: true};
    } else {
      return {validName: false};
    }
  };
}
