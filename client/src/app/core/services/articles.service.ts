import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ArticleInfo } from 'src/app/components/shared/models/Article-Info';

@Injectable({
    providedIn: 'root'
})

export class ArticlesService {
    private readonly BASE_URL = 'http://localhost:9999/';

    constructor(
        private http: HttpClient
    ){}

    getAllArticles() {
        return this.http.get<ArticleInfo[]>(this.BASE_URL + 'articles');
    }

    createArticle(body){
        return this.http.post(this.BASE_URL + 'article/create', body);
    }

    getArticleDetails(id) {
        return this.http.get(this.BASE_URL + 'article/details/' + id)
    }

    editArticle (id, body) {
        return this.http.post(this.BASE_URL + 'article/edit/' + id, body)
    }

    deleteArticle(id, body) {
        return this.http.post(this.BASE_URL + 'article/delete/' + id, body)
    }
}