import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpErrorInterceptor} from "./shared/interceptors/http-error.interceptor";
import {provideToastr} from "ngx-toastr";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(), [{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }],
    provideToastr({timeOut: 2000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,}),]
};
