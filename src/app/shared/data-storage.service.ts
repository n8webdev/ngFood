import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipe-book/recipe.service';

import { Recipe } from './../recipe-book/Recipe';

@Injectable()
export class DataStorageService implements OnInit {

  constructor(
    private _auth: AuthService,
    private _recipes: RecipeService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.token = this._auth.getToken();
  }

  saveRecipes() {
    const token = this._auth.getToken();
    return this.http.put(
      'https://lazy-test-cbd43.firebaseio.com/ngfood/recipes.json?auth=' + token,
      this._recipes.getRecipes(), {
        observe: 'events'
      }
    );
  }

  getRecipes(): void {
    const token = this._auth.getToken();
    // we don't need to return the data because we subscribe to it right here
    this.http.get<Recipe[]>('https://lazy-test-cbd43.firebaseio.com/ngfood/recipes.json?auth=' + token)
      .map(
        (recipes) => {
          // make sure our response data has at least an empty array for Ingredients
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
