import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() id: number;
  @Input() recipe: Recipe;

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
  }

  // showDetail(recipe: Recipe): void {
  //   this._recipeService.recipeSelected.emit(recipe);
  // }

}
