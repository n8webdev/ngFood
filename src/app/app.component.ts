import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCscvwiZhU6ISQ8vqI98RstS673jq3edEs',
      authDomain: 'lazy-test-cbd43.firebaseapp.com'
    });
    console.log(localStorage.getItem('id_token'));
  }
  // pageToShow: string = 'recipe';

  // showShopping(data) {
  //   this.pageToShow = data;
  //   console.log(this.pageToShow);
  // }

  // showRecipes(data) {
  //   this.pageToShow = data;
  //   console.log(this.pageToShow);
  // }

}
