import { RecipeService } from './../recipe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

// Model
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[] = [];
  recipeSubs: Subscription;

  constructor(
    private _recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipes = this._recipeService.getRecipes();
    this.recipeSubs = this._recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
      });
  }

  ngOnDestroy(): void {
    this.recipeSubs.unsubscribe();
  }

}
