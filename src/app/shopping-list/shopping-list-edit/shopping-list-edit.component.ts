import { ShoppingService } from './../shopping.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private _sl: ShoppingService) { }

  ngOnInit() {
  }

  addIngredient(name: string, amount: number): void {
    const newIng = {name: name, amount: amount};
    this._sl.addNew(newIng);
  }

}
