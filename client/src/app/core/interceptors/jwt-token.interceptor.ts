import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class JWTTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private toastrService: ToastrService
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let token = this.authService.token;

    let jsonReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(jsonReq)
        .pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && req.url.endsWith('signin')){
                    this.authService.saveUserInfo(event.body);
                    this.toastrService.success('Successfully logged in!', 'Success!');
                }
            })
        )
  }
}