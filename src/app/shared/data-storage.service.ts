import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
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
    // Usually that's what we need to authenticate to a backend [123456789 would be a token]
    // const headers = new HttpHeaders().set('Authorization', 'Nathan 123456789');
    // return this.http.put(
    //   'https://lazy-test-cbd43.firebaseio.com/ngfood/recipes.json',
    //   this._recipes.getRecipes(), {
    //     observe: 'events',
    //     // headers: headers
    //     params: new HttpParams().set('auth', token)
    //   }
    // );
    const req = new HttpRequest(
      'PUT',
      'https://lazy-test-cbd43.firebaseio.com/ngfood/recipes.json',
      this._recipes.getRecipes(),
      {
        reportProgress: true,
        params: new HttpParams().set('auth', token)
      }
    );
    return this.http.request(req);
  }

  getRecipes(): void {
    const token = this._auth.getToken();
    // we don't need to return the data because we subscribe to it right here
    this.http.get<Recipe[]>('https://lazy-test-cbd43.firebaseio.com/ngfood/recipes.json?', {
      params: new HttpParams().set('auth', token)
    })
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
