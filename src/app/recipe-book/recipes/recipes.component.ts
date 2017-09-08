import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  currentRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  sendDetails(recipe): void {
    this.currentRecipe = recipe;
  }
}
