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

  @Input() recipe: Recipe;

  constructor(private _sl: ShoppingService) { }

  ngOnInit() {
  }

  addToCart() {
    this._sl.addRecipeIngredients(this.recipe.ingredients);
  }

}
