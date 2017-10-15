import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ]
})

export class ShoppingListModule { }