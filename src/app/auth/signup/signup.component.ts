import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
    this._auth.signupUser(email, password);
  }

}
