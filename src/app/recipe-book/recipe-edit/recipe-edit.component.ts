import { RecipeService } from './../recipe.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private _recipe: RecipeService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
  }

  private initForm(): void {
    // assign empty names for inital FormControls
    let recipeName        = '';
    let recipeImagePath   = '';
    let recipeDescription = '';
    // tslint:disable-next-line:prefer-const
    let ingredients       = new FormArray([]);

    // when in edit mode, reasign initial FormControls' values
    if (this.editMode) {
      const recipe      = this._recipe.getRecipe(this.id);
      recipeName        = recipe.name;
      recipeImagePath   = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        // tslint:disable-next-line:prefer-const
        for (let ingredient of recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          );
        }
      }
    }

    // init form
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': ingredients
    });
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  addIngredient(): void {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    );
  }

  onSubmit(): void {
    console.log(this.recipeForm);
  }
}
