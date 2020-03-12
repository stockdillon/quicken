import { Component, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
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
    firstName: ['Dillon', [Validators.required, Validators.maxLength(30), nameValidator()]],
    lastName: ['Stock'],
    creditScore: ['800'],
    annualIncome: ['1000000', [Validators.min(1)]]
  });

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
    // private toastr
  ) {}

  ngOnInit() {
    // this.nameControl.setValue('testing');
  }

  get firstName() {
    return this.userDetails.get('firstName');
  }

  get lastName() {
    return this.userDetails.get('lastName');
  }

  get annualIncome() {
    return this.userDetails.get('annualIncome');
  }

  toast(): void {
    this.toastr.info('testing toastr');
  }
}
