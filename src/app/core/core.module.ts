import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './../shared/shared.module';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    AppRoutingModule
  ]
})

export class CoreModule { }
