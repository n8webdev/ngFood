import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';

import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    SignupComponent
  ]
})

export class AuthModule { }
