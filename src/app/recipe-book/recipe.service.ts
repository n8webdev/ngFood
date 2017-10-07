import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './Recipe';
import { Ingredient } from './../shared/ingredient.model';


@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Alpha', 'This is just a test',
    'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg',
    [
      new Ingredient('Egg', 2),
      new Ingredient('Bacon', 3)
    ]
  ),
    new Recipe('Beta', 'Just another test...',
    'https://upload.wikimedia.org/wikipedia/commons/1/12/Recipes_cottage_cheese_pie_named_misa.jpg',
    [
      new Ingredient('Grapes', 12),
      new Ingredient('Pear', 6)
    ]
  )
  ];

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  editRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index]  = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

}
