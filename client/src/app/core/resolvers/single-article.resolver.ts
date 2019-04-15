import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ArticleInfo } from 'src/app/components/shared/models/Article-Info';
import { ArticlesService } from '../services/articles.service';

@Injectable({
    providedIn: 'root'
})
export class SingleArticleResolver implements Resolve<ArticleInfo> {
    constructor (
        private articlesService: ArticlesService
    ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const id = route.params['id'];

        return this.articlesService.getArticleDetails(id);
    }
}