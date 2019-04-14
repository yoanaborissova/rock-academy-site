import { Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AnonymousGuard implements CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router,
        private toastrService: ToastrService
    ) {

    }
    
    canLoad(route: Route, segments: UrlSegment[]){
        if (this.authService.isAnonymous()){
            return true;
        } 

        this.router.navigate(['home']);
        this.toastrService.info('You are already logged in.');
    }
}