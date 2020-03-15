import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketComponentComponent } from './rocket-component.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, IndividualConfig, ActiveToast, ToastToken, ToastrModule, ToastPackage, ToastRef } from 'ngx-toastr/public_api';
import { Overlay } from '@angular/cdk/overlay';
import { Injector, NgZone, Injectable, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// class MockToastrService extends ToastrService {
//   constructor() {
//     super();
//   }
//   info(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any> {
//     console.log('called mocked toastr info method');
//     return {} as ActiveToast<any>;
//   }
// }

// @Injectable()
// class MockToastPackage extends ToastPackage {
//   constructor() {
//     const toastConfig = { toastClass: 'custom-toast' };
//     super(1, toastConfig as IndividualConfig, 'test message', 'test title', 'show', new ToastRef(null));
//   }
// }

// @NgModule({
//   providers: [
//     { provide: ToastPackage, useClass: MockToastPackage }
//   ],
//   imports: [
//     ToastrModule.forRoot(),
//   ],
//   exports: [
//     ToastrModule
//   ]
// })
// export class ToastrTestingModule {
// }

describe('RocketComponentComponent', () => {
  let component: RocketComponentComponent;
  let fb = new FormBuilder();
  let toastr: ToastrService;
  let toastrSpy: any;
  // toastr = new ToastrService({} as ToastToken, {} as Partial<Overlay> , {} as Injector, {} as DomSanitizer, {} as NgZone);
  let fixture: ComponentFixture<RocketComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketComponentComponent ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        // ToastrTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(RocketComponentComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    // let toastr = new MockToastrService();
    // let toastrSpy = spyOn(toastr, 'info').and.returnValue(false);
    component = new RocketComponentComponent(fb);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('get first name', () => {
    expect(component.firstName.value).toEqual('Dillon');
  });

  it('get last name', () => {
    expect(component.lastName.value).toEqual('Stock');
  });

  it('get creditScore', () => {
    expect(component.creditScore.value).toEqual(800);
  });

  it('get annualIncome', () => {
    expect(component.annualIncome.value).toEqual(1000000);
  });

});
