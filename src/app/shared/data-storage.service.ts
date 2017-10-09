import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RecipeService } from './../recipe-book/recipe.service';

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
      .subscribe(
        (response: Response) => this._recipes.setRecipes(response.json())
      );
  }
}
