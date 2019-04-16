import { HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
    constructor(
        private toastrService: ToastrService,
    ){ }  
  
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
        .pipe(
            tap((event: HttpEvent<any>) => {
                let notify: boolean = req.url.includes('create') ||
                req.url.includes('signin') || 
                req.url.includes('signup') ||
                req.url.includes('edit') ||
                req.url.includes('delete') ||
                req.url.includes('approve') ||
                req.url.includes('remove') ||
                req.url.includes('add');

                if (event instanceof HttpResponse && notify){
                    this.toastrService.success(event.body.message);
                }
            })
        )
    }
  }