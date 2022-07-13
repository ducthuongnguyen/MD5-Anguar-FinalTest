import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL_USER = environment.apiUrl + 'users/';

  constructor(private httpClient: HttpClient) {
  }

  register(user: any): Observable<User> {
    // @ts-ignore
    return this.httpClient.post<User>(this.URL_USER + 'signup', user);
  }

  // login(user: User): Observable<User> {
  //   // @ts-ignore
  //   return this.httpClient.post<User>(this.URL_USER + 'signin');
  // }
}
