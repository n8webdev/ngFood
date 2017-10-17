import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './../shared/shared.module';

import { AuthGuardService } from './../auth/auth-guard.service';
import { AuthService } from './../auth/auth.service';
import { AuthInterceptor } from './../shared/auth.interceptor';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipe-book/recipe.service';
import { ShoppingService } from './../shopping-list/shopping.service';

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
  providers: [
    ShoppingService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: [
    NavbarComponent,
    AppRoutingModule
  ]
})

export class CoreModule { }
