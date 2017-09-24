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

  constructor() { }

  ngOnInit() {
  }

  // showRecipes(): void {
  //   this.recipeActive.emit('recipe');
  // }

  // showShopping(): void {
  //   this.recipeActive.emit('shopping');
  // }

}
