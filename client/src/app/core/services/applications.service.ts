import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationInfo } from 'src/app/components/shared/models/Application-Info';

@Injectable({
    providedIn: 'root'
})

export class ApplicationsService {
    private readonly BASE_URL = 'http://localhost:9999/';

    constructor(
        private http: HttpClient
    ) { }

    getAllApplications() {
        return this.http.get<ApplicationInfo[]>(this.BASE_URL + 'applications');
    }

    getUserApplications(id){
        return this.http.get(this.BASE_URL + 'applications/' + id);
    }

    createApplication(body) {
        return this.http.post(this.BASE_URL + 'application/apply', body);
    }

    approveApplication(body) {
        return this.http.post(this.BASE_URL + 'application/approve/' + body, body);
    }
   
    disapproveApplication(body) {
        return this.http.post(this.BASE_URL + 'application/disapprove/' + body, body);
    }
}