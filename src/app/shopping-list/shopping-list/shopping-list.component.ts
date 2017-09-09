import { ShoppingService } from './../shopping.service';
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  constructor(private _sl: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this._sl.getIngredients();
    this._sl.newIngredient
      .subscribe(ingredients => this.ingredients = ingredients);
  }

}
