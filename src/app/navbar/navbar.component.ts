import { Response } from '@angular/http';
import { DataStorageService } from './../shared/data-storage.service';
// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // @Output() recipeActive: EventEmitter<string> = new EventEmitter();
  // @Output() shoppingActive: EventEmitter<string> = new EventEmitter();

  constructor(private _dataStorage: DataStorageService) { }

  ngOnInit() {
  }

  // showRecipes(): void {
  //   this.recipeActive.emit('recipe');
  // }

  // showShopping(): void {
  //   this.recipeActive.emit('shopping');
  // }

  saveData(): void {
    this._dataStorage.saveRecipes()
      .subscribe(
        (response: Response) => console.log(response)
      );
  }

}
