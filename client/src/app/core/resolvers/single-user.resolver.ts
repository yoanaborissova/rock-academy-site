import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/components/shared/models/User-Info';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class SingleUserResolver implements Resolve<UserInfo> {
    constructor(
        private authService: AuthService,
    ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'];
        
        return this.authService.getUserProfile(id);
    }
}