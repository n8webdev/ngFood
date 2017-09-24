import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from './../../shopping-list/shopping.service';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  id: number;
  recipe: Recipe;

  constructor(
    private _recipeS: RecipeService,
    private route: ActivatedRoute,
    private _sl: ShoppingService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = +params['id'];
        this.recipe = this._recipeS.getRecipe(this.id);
      });
  }

  addToCart() {
    this._sl.addRecipeIngredients(this.recipe.ingredients);
  }

}
