import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RecipeService } from './../recipe-book/recipe.service';

import { Recipe } from './../recipe-book/Recipe';

@Injectable()
export class DataStorageService {

  constructor(
    private _recipes: RecipeService,
    private http: Http
  ) { }

  saveRecipes(): Observable<Response> {
    return this.http.put(
      'https://lazy-test-cbd43.firebaseio.com/ngfood/recipes.json',
      this._recipes.getRecipes()
    );
  }

  getRecipes(): void {
    // we don't need to return the data because we subscribe to it right here
    this.http.get('https://lazy-test-cbd43.firebaseio.com/ngfood/recipes.json')
      .map(
        (response: Response) => {
          // make sure our response data has at least an empty array for Ingredients
          const recipes = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => this._recipes.setRecipes(recipes)
      );
  }
}
