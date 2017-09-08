import { RecipeService } from './../recipe.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Model
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() showDetail: EventEmitter<Recipe> = new EventEmitter();

  recipes: Recipe[] = [];

  constructor(
    private _recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipes = this._recipeService.getRecipes();
  }

  getRecipeToShow(recipe: Recipe): void {
    this.showDetail.emit(recipe);
  }
}
