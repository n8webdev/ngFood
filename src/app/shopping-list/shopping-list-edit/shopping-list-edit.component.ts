import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ShoppingService } from './../shopping.service';

import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private _sl: ShoppingService) { }

  ngOnInit() {
  }

  addIngredient(form: NgForm): void {
    const newIng = new Ingredient(form.value.name, form.value.amount);
    this._sl.addNew(newIng);
  }

}
