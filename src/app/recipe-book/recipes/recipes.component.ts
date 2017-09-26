import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
// import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  // currentRecipe: Recipe;

  constructor(
    // private _recipeService: RecipeService
  ) { }

  ngOnInit() {
    // this._recipeService.recipeSelected
    // .subscribe(recipe => {
    //   this.currentRecipe = recipe;
    //   // console.log(this.currentRecipe);
    // });
  }

}
