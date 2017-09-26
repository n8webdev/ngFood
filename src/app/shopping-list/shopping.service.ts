import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingService {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 8)
  ];

  // newIngredient = new EventEmitter<Ingredient[]>();
  newIngredient = new Subject<Ingredient[]>();

  getIngredients(): Array<Ingredient> {
    return this.ingredients.slice();
  }

  addNew(data): void {
    this.ingredients.push(new Ingredient(data.name, data.amount));
    this.newIngredient.next(this.ingredients.slice());
  }

  addRecipeIngredients(data: Ingredient[]): void {
    // console.log(...data);
    this.ingredients.push(...data);
    this.newIngredient.next(this.ingredients.slice());
  }

}
