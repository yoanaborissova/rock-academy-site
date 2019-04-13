import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CommentsService {
    private readonly BASE_URL = 'http://localhost:9999/';

    constructor(
        private http: HttpClient
    ){}

    createComment(body) {
        return this.http.post(this.BASE_URL + 'comment/create', body);
    }

    getComment(id){
        return this.http.get(this.BASE_URL + 'comment/' + id);
    }

    getArticleComments(id){
        return this.http.get(this.BASE_URL + 'comments/' + id);
    }

    editComment(id, body){
        return this.http.post(this.BASE_URL + 'comment/edit/' + id, body);
    }

    deleteComment(id, body){
        return this.http.post(this.BASE_URL + 'comment/delete/' + id, body);
    }
}    