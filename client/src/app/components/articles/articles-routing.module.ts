import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

const articlesRoutes: Routes = [
    { path: '', component: ArticlesListComponent}, 
    { path: 'create', component: ArticleCreateComponent, canActivate: [AdminGuard]},
    { path: 'details/:id', component: ArticleDetailsComponent},
    { path: 'edit/:id', component: ArticleEditComponent, canActivate: [AdminGuard]}
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