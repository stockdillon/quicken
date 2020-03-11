import { LoanOption } from './LoanOption.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-options',
  templateUrl: './loan-options.component.html',
  styleUrls: ['./loan-options.component.css']
})
export class LoanOptionsComponent implements OnInit {

  public options: LoanOption[] = [
    new LoanOption('FHA Conventional', '30 years at 4.15%'),
    new LoanOption('VA Conventional', '15 years at 3.85%'),
    new LoanOption('FHA Variable ARM', '30 years at 3.99%'),
    new LoanOption('Fannie Mae HELOC', '30 years at 4.75%'),
    new LoanOption('Freddie Mac Conventional', '30 years at 5.15%'),
    new LoanOption('VA ARM', '30 years at 4.05%'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
