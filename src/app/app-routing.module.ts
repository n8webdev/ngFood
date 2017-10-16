import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipe-book/recipes.module#RecipesModule' },
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
