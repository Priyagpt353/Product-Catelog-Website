import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './model/user.model'


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8080/api/v1/user'

  constructor( private httpClient:HttpClient) { }

  signupUser(user:User):Observable<Object>{
    return this.httpClient.post(this.baseUrl,user)
  }
  
}
