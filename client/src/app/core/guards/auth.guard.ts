import { Router, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ToastrService } from 'ngx-toastr';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthGuard implements CanActivate {
    path: import("@angular/router").ActivatedRouteSnapshot[];
    route: import("@angular/router").ActivatedRouteSnapshot;
    constructor(
        private authService: AuthService,
        private router: Router,
        private toastrService: ToastrService
    ) {

    }
    
    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot){
        if (this.authService.isAuthenticated()){
            return true;
        } 

        this.router.navigate(['auth/login']);
        this.toastrService.warning('You have to be logged in to see this data.', 'Unauthorized');
    }
}