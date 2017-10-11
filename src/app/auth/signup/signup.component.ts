import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  action = '';
  textToShow = '';

  constructor(
    private _auth: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
    .subscribe(data => {
      this.action = data['action'];
      data['action'] === 'signin' ? this.textToShow = 'Sign In' : this.textToShow = 'Sign Up';
    });
  }

  onSubmit(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
    if (this.action === 'signup') {
      this._auth.signupUser(email, password);
    } else {
      this._auth.signinUser(email, password);
    }
  }

}
