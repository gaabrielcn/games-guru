// http-error.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ToastrService} from "ngx-toastr";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private toastrService: ToastrService) {

  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.toastrService.error(`${error.error['message']}`, `Error: ${error.error['error']} | ${error.error['code']}`);
        return throwError(error);
      })
    );
  }
}
