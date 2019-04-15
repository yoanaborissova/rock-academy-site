import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { SingleArticleResolver } from 'src/app/core/resolvers/single-article.resolver';

const articlesRoutes: Routes = [
    { path: '', component: ArticlesListComponent}, 
    { path: 'create', component: ArticleCreateComponent, canActivate: [AdminGuard]},
    { path: 'details/:id', component: ArticleDetailsComponent, resolve: {article: SingleArticleResolver}},
    { path: 'edit/:id', component: ArticleEditComponent, canActivate: [AdminGuard],  resolve: {article: SingleArticleResolver}}
]

@NgModule({
    imports: [
        RouterModule.forChild(articlesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ArticlesRoutingModule{};