import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingService {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 8)
  ];

  newIngredient = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addNew(data): void {
    this.ingredients.push(new Ingredient(data.name, data.amount));
    this.newIngredient.emit(this.ingredients.slice());
  }

}
