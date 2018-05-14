import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserLogin } from '../models/userLogin';
import { messages } from '../config/messages';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';

@Injectable()
export class AuthenticationService {

  static readonly TOKEN = "TOKEN";

  constructor( private fAuth:AngularFireAuth ) {

  }

  login( userLogin:UserLogin ) : Observable<any> {
    return Observable.fromPromise(
      this.fAuth.auth.signInWithEmailAndPassword(
        userLogin.username, userLogin.password))
        .map( token => {
          return this.saveToken( token );
        }).catch( error => {
          return Observable.throw( messages[error.code] );
        });
  }

  logout() {
    return Observable.fromPromise(
      this.fAuth.auth.signOut()
    ).map( () => {
      this.removeToken();
      return Observable.empty();
    }).catch( error => {
      return Observable.throw( messages[error.code] );
    });
  }

  saveToken( token ) {
    localStorage.setItem(AuthenticationService.TOKEN, token);
  }

  removeToken() {
    localStorage.removeItem(AuthenticationService.TOKEN);
  }

  isAuthenticated() : boolean {
    let res = false;
    if (localStorage.getItem(AuthenticationService.TOKEN)
        && this.fAuth.authState !== null) {
      res = true;
    }

    return res;
  }
}
