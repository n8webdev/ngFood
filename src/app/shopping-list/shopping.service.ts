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
  // Subject is an Observer and Subscriber at the same time
  // ... used here to emit the Ingredients list asynchronously

  newIngredient = new Subject<Ingredient[]>();
  editIngredient = new Subject<number>();

  emitData(): void {
    this.newIngredient.next(this.ingredients.slice());
  }

  getIngredients(): Array<Ingredient> {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addNew(data): void {
    this.ingredients.push(new Ingredient(data.name, data.amount));
    this.emitData();
  }

  addRecipeIngredients(data: Ingredient[]): void {
    // console.log(...data);
    this.ingredients.push(...data);
  }

  updateIngredients(index: number, data: Ingredient): void {
    this.ingredients[index] = data;
    this.emitData();
  }

  deleteItem(index: number): void {
    this.ingredients.splice(index, 1);
    this.emitData();
  }

}
