import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';

import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { StartComponent } from './recipe-book/start/start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: StartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]  }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent, data: { action: 'signup'} },
  { path: 'login', component: SignupComponent, data: { action: 'login'} }
  // { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found :('} },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
