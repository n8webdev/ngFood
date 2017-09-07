import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pageToShow: string = 'recipe';

  showShopping(data) {
    this.pageToShow = data;
    console.log(this.pageToShow);
  }

  showRecipes(data) {
    this.pageToShow = data;
    console.log(this.pageToShow);
  }

}
