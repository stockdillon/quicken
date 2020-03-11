import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RocketComponentComponent } from './rocket-component/rocket-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanOptionsComponent } from './loan-options/loan-options.component';
import { LoanOptionComponent } from './loan-options/loan-option/loan-option.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    RocketComponentComponent,
    LoanOptionsComponent,
    LoanOptionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    RocketComponentComponent,
    LoanOptionsComponent,
  ]
})
export class ComponentsModule { }
