import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { BandsService } from '../services/bands.service';
import { BandInfo } from 'src/app/components/shared/models/Band-Info';

@Injectable({
    providedIn: 'root'
})
export class SingleBandResolver implements Resolve<BandInfo> {
    constructor (
        private bandsService: BandsService
    ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const id = route.params['id'];

        return this.bandsService.getBandDetails(id);
    }
}