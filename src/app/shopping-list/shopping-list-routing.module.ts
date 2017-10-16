import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuardService } from './../auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const shoppingListRoutes: Routes = [
  { path: '', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(shoppingListRoutes)],
  exports: [RouterModule]
})

export class ShoppingListRoutingModule { }
