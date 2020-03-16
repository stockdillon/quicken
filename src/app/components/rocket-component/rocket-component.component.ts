import { Component, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { nameValidator } from 'src/app/directives/name-validator.directive';

@Component({
  selector: 'app-rocket-component',
  templateUrl: './rocket-component.component.html',
  styleUrls: ['./rocket-component.component.css']
})
export class RocketComponentComponent implements OnInit {
  // firstName = 'Dillon';
  // lastName = 'Stock';
  // nameControl = new FormControl('');
  // userDetails = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   creditScore: new FormControl(''),
  //   annualIncome: new FormControl(''),
  // });

  @Output()
  userDetails = this.fb.group({
    // firstName: ['Dillon', [Validators.required, Validators.maxLength(30), nameValidator()]],
    firstName: ['Dillon', [Validators.required, Validators.maxLength(30), this.nameValidator(10)]],
    lastName: ['Stock'],
    creditScore: [800],
    annualIncome: [1000000, [Validators.min(1)]]
  });

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // this.nameControl.setValue('testing');
    this.toastr.toastrConfig.preventDuplicates = true;
  }

  get firstName() {
    return this.userDetails.get('firstName');
  }

  get lastName() {
    return this.userDetails.get('lastName');
  }

  get creditScore() {
    return this.userDetails.get('creditScore');
  }


  get annualIncome() {
    return this.userDetails.get('annualIncome');
  }

  toast(): void {
    // this.toastr.info('testing toastr');
  }

    /**
     * @description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field has maximum of 5 characters AND DISPLAY TOAST
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
  nameValidator(maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const r = Validators.maxLength(maxLength);
      // this.toastr.clear()
      const dups = this.toastr.findDuplicate('First name is too long', false, true);
      if (r(control) !== null && 'maxlength' in r(control)) {
        this.toastr.warning('First name is too long', null, {disableTimeOut: true, });
        return {validName: true};
      } else {
        this.toastr.clear();
        return {validName: false};
      }
    };
  }
}
