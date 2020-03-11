import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOptionComponent } from './loan-option.component';

describe('LoanOptionComponent', () => {
  let component: LoanOptionComponent;
  let fixture: ComponentFixture<LoanOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
