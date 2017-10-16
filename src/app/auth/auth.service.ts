import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error.message));
  }

  // TODO: redirect to original target url after logging in
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        // console.log(response);
        // localStorage.setItem('id_token', response.refreshToken);
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            this.token = token;
            this.router.navigate(['/recipes']);
          });
      })
      .catch(error => console.log(error.message));
  }

  logOut(): void {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(token => this.token = token);
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

}

// both emails Nathan17
