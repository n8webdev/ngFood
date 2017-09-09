import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './Recipe';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

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

  getRecipes() {
    return this.recipes.slice();
  }

}
