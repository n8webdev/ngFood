import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent, data: { action: 'signup'} },
  { path: 'login', component: SignupComponent, data: { action: 'login'} }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
