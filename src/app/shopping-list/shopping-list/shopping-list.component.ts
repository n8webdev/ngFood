import { Subscription } from 'rxjs/Subscription';
import { ShoppingService } from './../shopping.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private newIngredientSubs: Subscription;
  ingredients: Ingredient[];

  constructor(private _sl: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this._sl.getIngredients();
    this.newIngredientSubs = this._sl.newIngredient
      .subscribe(ingredients => this.ingredients = ingredients);
  }

  ngOnDestroy() {
    this.newIngredientSubs.unsubscribe();
  }

}
