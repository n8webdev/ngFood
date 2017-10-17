import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Logging Interceptor');
    return next.handle(req).do(
      event => console.log('DO: ', event)
    )
  }
}
