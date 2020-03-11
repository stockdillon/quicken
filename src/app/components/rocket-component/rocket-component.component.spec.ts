import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketComponentComponent } from './rocket-component.component';

describe('RocketComponentComponent', () => {
  let component: RocketComponentComponent;
  let fixture: ComponentFixture<RocketComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
