import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './model/user.model'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/api/v1/user';

  constructor(private httpClient:HttpClient) { }

  loginUser(user:any):Observable<any>{
    return this.httpClient.get(this.baseUrl+'/user',user)
  }

  public loginUserFromRemote(user: any): Observable<any> {           //loginUser
    return this.httpClient.get(this.baseUrl, user);
  }

  login(token: string, firstName: string) {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("firstName", firstName)
  }

  isLoggedIn() {
    let token = sessionStorage.getItem("token");
    console.log(token);
    if (token == undefined || token === '' || token == null) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("firstName")
    return true;
  }

  getToken() {
    let token = sessionStorage.getItem("token");
    console.log(token);
    if (token == undefined || token === '' || token == null) {
      return null;
    } else {
      return token;
    }

  }
}
