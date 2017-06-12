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
  public login(username, password): Observable<any> {
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
            // throw Observable.throw(new Error("login failed error "));
            throw new Error("Login Failed ...");
          }
        } else {
          console.log("throw login failed Errror ****");
          //throw Observable.throw(new Error("login failed error "));
          throw new Error("Login Failed ......");
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }

}
