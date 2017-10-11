import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token = '';

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error.message));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        localStorage.setItem('id_token', response.refreshToken);
        firebase.auth().currentUser.getIdToken()
          .then(token => this.token = token);
      })
      .catch(error => console.log(error.message));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(token => this.token = token);
    return this.token;
  }

}

// both emails Nathan17
