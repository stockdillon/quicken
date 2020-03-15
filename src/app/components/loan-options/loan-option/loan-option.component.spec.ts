import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOptionComponent } from './loan-option.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoanOption } from '../LoanOption.model';

describe('LoanOptionComponent', () => {
  let component: LoanOptionComponent;
  let fixture: ComponentFixture<LoanOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanOptionComponent ],
      imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOptionComponent);
    component = fixture.componentInstance;
    component.loanOption = new LoanOption('test');
    fixture.detectChanges();
  });

  it('should create', () => {
    // component.loanOption = new LoanOption('test');
    expect(component).toBeTruthy();
  });
});
