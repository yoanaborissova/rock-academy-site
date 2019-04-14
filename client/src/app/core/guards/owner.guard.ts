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
export class OwnerGuard implements CanActivate {
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
        let url = state.url.split('/');
        let id = url[url.length - 1];

        if (id === this.authService.id || ((this.authService.bands !== null && this.authService.bands.includes(id)) || this.authService.isAdmin())){
            return true;
        } 

        this.router.navigate(['/home']);
        this.toastrService.warning('You are not allowed into this page.', 'Unauthorized!');
    }
}