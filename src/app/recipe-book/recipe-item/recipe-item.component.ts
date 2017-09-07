import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeDetail: EventEmitter<Recipe> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showDetail(recipe: Recipe): void {
    this.recipeDetail.emit(recipe);
  }

}
