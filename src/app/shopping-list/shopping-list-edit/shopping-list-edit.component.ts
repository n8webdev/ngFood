import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { ShoppingService } from './../shopping.service';

import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') addItemForm: NgForm;

  editMode = false;
  $editItem: Subscription;
  editingItem: Ingredient;
  editIndex: number;

  constructor(private _sl: ShoppingService) { }

  ngOnInit() {
    this.$editItem = this._sl.editIngredient
      .subscribe((index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editingItem = this._sl.getIngredient(index);
        this.addItemForm.setValue({
          name: this.editingItem.name,
          amount: this.editingItem.amount
        });
      });
  }

  addIngredient(form: NgForm): void {
    const newItem = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this._sl.updateIngredients(this.editIndex, newItem);
    } else {
      this._sl.addNew(newItem);
    }
    this.editMode = false;
    this.addItemForm.reset();
  }

  ngOnDestroy(): void {
    this.$editItem.unsubscribe();
  }

}
