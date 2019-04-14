import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BandInfo } from 'src/app/components/shared/models/Band-Info';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BandsService {
    private readonly BASE_URL = 'http://localhost:9999/';

    constructor(
        private http: HttpClient
    ) { }

    getAllBands() {
        return this.http.get<BandInfo[]>(this.BASE_URL + 'bands');
    }

    createBand(body) {
        return this.http.post(this.BASE_URL + 'band/create', body);
    }

    addBandMember(id, member) {
        return this.http.post(this.BASE_URL + 'band/add/member/' + id, member);
    }

    removeBandMember(id, member) {
        return this.http.post(this.BASE_URL + 'band/remove/member/' + id, member);
    }

    getBandDetails(id) {
        return this.http.get<BandInfo>(this.BASE_URL + 'band/details/' + id);
    }

    editBand(id, body) {
        return this.http.post(this.BASE_URL + 'band/edit/' + id, body);
    }

    deleteBand(id, body) {
        return this.http.post(this.BASE_URL + 'band/delete/' + id, body);
    }

    
}