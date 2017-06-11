import { Response } from "@angular/http/src/static_response";
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { UUID } from "angular2-uuid";
import 'rxjs/Rx'
import { User } from "app/user/user";

@Injectable()
export class RestService {
  REMOTE_USER_URL = "http://localhost:3000/users/";

  REMOTE_PARCEL_DHL_URL = "http://localhost:3000/dhls";
  REMOTE_PARCEL_BPOST_URL = "http://localhost:3000/bposts";
  constructor(private http: Http) { }


  getDHL(id): Observable<any> {

    return this.http.get(this.REMOTE_PARCEL_DHL_URL + "?number=" + id).
      map((response: Response) => response.json());
  }

  getDHLs(): Observable<any> {

    console.log(this.REMOTE_PARCEL_DHL_URL);
    return this.http.get(this.REMOTE_PARCEL_DHL_URL).
      map((response: Response) => response.json());
  }

  getBposts(): Observable<any> {
    return this.http.get(this.REMOTE_PARCEL_BPOST_URL).
      map((response: Response) => response.json());
  }

  getBpost(id): Observable<any> {
    console.log("xxx  " + this.REMOTE_PARCEL_BPOST_URL + "?number=" + id);
    return this.http.get(this.REMOTE_PARCEL_BPOST_URL + "?number=" + id).
      map((response: Response) => response.json());

  }

  getUser(user: User): Observable<any> {
    return this.http.get(this.REMOTE_USER_URL + "?username=" + user.username).
      map((response: Response) => response.json());
  }

  postUser(user: User): Observable<any> {
    user.id = UUID.UUID();
    console.log("postUser is called " + user);
    return this.http.post(this.REMOTE_USER_URL, user)
      .map((response: Response) => response.json());
  }

}
