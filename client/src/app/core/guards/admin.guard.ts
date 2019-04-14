import { Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ToastrService } from 'ngx-toastr';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AdminGuard implements CanActivate {
    path: import("@angular/router").ActivatedRouteSnapshot[];
    route: import("@angular/router").ActivatedRouteSnapshot;
    constructor(
        private authService: AuthService,
        private router: Router,
        private toastrService: ToastrService
    ) {

    }
    
    canActivate(route: Route, segments: UrlSegment[]){
        if (this.authService.isAdmin()){
            return true;
        } 

        this.router.navigate(['home']);
        this.toastrService.warning('Only admins are allowed to see this page.', 'Unauthorized!');
    }
}