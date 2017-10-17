import { Injectable } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private _auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    const clonedReq = req.clone({
      // Authorization Header could conveniently by appended here so that
      // ... we don't need to add it to EVERY Req
      // headers: req.headers.append('', '')
      params: req.params.set('auth', this._auth.getToken())
    });
    return next.handle(clonedReq);
  }

}
