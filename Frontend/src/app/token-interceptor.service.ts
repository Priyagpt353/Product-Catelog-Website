import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { RegistrationService } from './registration.service'
import { LoginService } from './login.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private servive: RegistrationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = sessionStorage.getItem("token");
    if (accessToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          `Bearer ${accessToken}`
        )


      });
      console.log('Token added to HTTP request');
      return next.handle(cloned);
    }
    else {
      //No token; proceed request without bearer token
      console.log('No token added to HTTP request');
      return next.handle(req);
    }
    //throw new Error('Method not implemented.');
  }
}
