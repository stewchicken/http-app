import { Injectable } from '@angular/core';
import { Response } from "@angular/http/src/static_response";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { UUID } from "angular2-uuid";
import 'rxjs/Rx'
import { User } from "app/user/user";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AuthService {
  REMOTE_USER_URL = "http://localhost:3000/users/";
  public subject: Subject<User> = new Subject<User>();

  constructor(public http: Http) { }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }
  public login(username, password) {
    return this.http.get(this.REMOTE_USER_URL + "?username=" + username)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let data = response.json();
        if (data.length == 1) {
          let user = data[0];
          if (user.username == username && user.password == password) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.subject.next(Object.assign({}, user));
            return "LoggedIn Successfully";
          } else {
            console.log("throw login failed Errror **");
            //throw Observable.throw(response);
            throw Observable.throw(new Error("login failed error "));
          }
        } else {
          console.log("throw login failed Errror ****");
          throw Observable.throw(new Error("login failed error "));
        }
      });
    /*
    map((response: Response) => response.json()).subscribe(
    data => {
      let user = data[0];
      if (user.name == username && user.password == password) {
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
    },
    error => {
      console.log("##### user register error ###### " + error);
    });;
    */
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }

}