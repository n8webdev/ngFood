import { Component, OnInit } from '@angular/core';

// Model
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Alpha', 'This is just a test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg'),
    new Recipe('Alpha', 'This is just a test', 'https://upload.wikimedia.org/wikipedia/commons/1/12/Recipes_cottage_cheese_pie_named_misa.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
