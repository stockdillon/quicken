import { LoanOption } from './../LoanOption.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-option',
  templateUrl: './loan-option.component.html',
  styleUrls: ['./loan-option.component.css']
})
export class LoanOptionComponent implements OnInit {
  @Input() loanOption: LoanOption;
  constructor() { }

  ngOnInit() {
  }

  // splitArray(options: any[]): Array<Array<any>> {
  //   const cols = 2;
  //   let rows: number =  Math.ceil(options.length / 2);
  //   rows = options.length;
  //   return [[]];
  // }

}
