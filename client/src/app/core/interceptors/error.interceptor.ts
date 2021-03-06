import { HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private toastrService: ToastrService,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
            .pipe(
                catchError((err: HttpErrorResponse) => {
                    this.toastrService.error(err.error.message, 'Error!');
                    return throwError(err);
                })
            )
    }
}