import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() ingredientAdded: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(name: string, amount: number): void {
    let newIng = {name: name, amount: amount};
    this.ingredientAdded.emit(newIng);
  }

}
