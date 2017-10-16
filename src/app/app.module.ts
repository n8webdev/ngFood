import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipe-book/recipe.service';
import { ShoppingService } from './shopping-list/shopping.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthModule
  ],
  providers: [
    ShoppingService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
