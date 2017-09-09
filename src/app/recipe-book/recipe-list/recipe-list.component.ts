import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

// Model
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(
    private _recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipes = this._recipeService.getRecipes();
  }

}
